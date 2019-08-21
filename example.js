const tfrs = require('./index')

const example = async () => {
  try {
    const listing = await tfrs.list()
    const details = await tfrs(listing[0].notam, { format: 'json' })
    console.log(JSON.stringify(details, null, 2))
  } catch (err) {
    console.error(`Fetching/parsing failed`, err)
  }
}

;(async () => example())()
