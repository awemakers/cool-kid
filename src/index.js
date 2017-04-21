const cluster = require('cluster')
const express = require('express')
const scoringData = require('./scoring-data')

if (cluster.isMaster) {
  for (let i = 0; i < require('os').cpus().length; i++) {
    cluster.fork()
  }

  cluster.on('exit', worker => cluster.fork())
} else {
  const app = express()
  const server = require('http').createServer(app)

  app.get('/:username/:repositoryName/:branch?', async (req, res) => {
    const {
      username,
      repositoryName,
      branch = 'master'
    } = req.params
    const URL = `https://raw.githubusercontent.com/${username}/${repositoryName}/${branch}`
    const {
      dependencies = null,
      devDependencies = null
    } = await getPackageDotJSON(`${URL}/package.json`)
    const yarnLockExists = await getYarnLock(`${URL}/yarn.lock`)

    let score = (yarnLockExists ? 10 : 0)

    if (dependencies && devDependencies) {
      for (const dependencyName in dependencies) {
        const dependency = scoringData[dependencyName]
        dependency && (score += dependency)
      }
    }

    return res.json(score)
  })

  server.listen(process.env.NODE_ENV === 'development' ? 8080 : 80)
}

process.on('uncaughtException', (e) => {
  console.log(e)
  process.exit(1)
})
