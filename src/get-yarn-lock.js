const fetch = require('node-fetch')

const getYarnLock = async (URL) => {
  try {
    const response = await fetch(URL)
    return (response.status === 200)
  } catch (e) {
    console.log(e)
    return false
  }
}

module.exports = getYarnLock
