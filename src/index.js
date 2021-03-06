const cluster = require('cluster')
const express = require('express')
const getPackageDotJSON = require('./get-package-dot-json')
const getYarnLock = require('./get-yarn-lock')
const scoringData = require('./scoring-data')
const svg = require('./svg')

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

    let color = '#D2402F'
    if (score >= 35) color = '#52D22F'
    else if (score >= 0 && score <= 35) color = '#D27B2F'

    res.setHeader('Content-Type', 'image/svg+xml')
    return res.send(svg(score, color))
  })

  server.listen(process.env.PORT || 8080)
}

process.on('uncaughtException', (e) => {
  console.log(e)
  process.exit(1)
})
