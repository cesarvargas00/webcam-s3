const fetch = require('node-fetch')
const AWS = require('aws-sdk')

module.exports = configObject => {
  AWS.config.update(configObject)
  const s3 = new AWS.S3()

  return { send: async (url, filename, bucket) => {
    const response = await fetch(url)
    const params = {
      Body: response.body,
      ContentType: 'image/jpeg',
      Bucket: bucket,
      Key: filename
    }

    return new Promise(function (resolve, reject) {
      s3.upload(params, (err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
    })
  } }
}
