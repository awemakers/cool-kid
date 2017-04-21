const fetch = require('node-fetch')

const getPackageDotJSON = async (URL) => {
  try {
    const response = await fetch(URL)
    const body = await response.json()
    return body
  } catch (e) {
    console.log(e)
    return {}
  }
}

module.exports = getPackageDotJSON
