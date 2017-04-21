const express = require('express')
const app = express()
const server = require('http').createServer(app)
const fetch = require('node-fetch')
const scoringData = require('./scoring-data.json')

const getPackageDotJSON = async (URL) => {
  try {
    const response = await fetch(URL)
    const body = await response.json()
    return body
  } catch (e) {
    console.log(e)
  }
}

app.get('/:username/:repositoryName/:branch?', async (req, res) => {
  const { username, repositoryName, branch = 'master' } = req.params
  const URL =
    `https://raw.githubusercontent.com/${username}/${repositoryName}/${branch}/package.json`
  const { dependencies, devDependencies } = await getPackageDotJSON(URL)

  let score = 0

  for (const dependencyName in dependencies) {
    const dependency = scoringData[dependencyName]
    dependency && (score += dependency)
  }

  return res.json(score)
})

server.listen(process.env.NODE_ENV === 'development' ? 8080 : 80)
