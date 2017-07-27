export default function (files, bucket, cb) {
  if (!Array.isArray(files) || files.find(file => !(file instanceof File))) {
    throw new Error('Can only upload files to S3')
  }
  const urls = []
  files.forEach((file) => {
    /* Get Signed Request */
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}&bucket=${bucket}`)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status !== 200) {
        throw new Error('Could not get signed URL.')
      }
      const {signedRequest, url} = JSON.parse(xhr.responseText)

      /* Upload File to Amazon */
      const xhr2 = new XMLHttpRequest()
      xhr2.open('PUT', signedRequest)
      xhr2.onreadystatechange = () => {
        if (xhr2.readyState === 4 && xhr2.status !== 200) {
          throw new Error('Could not upload file.')
        }

        /* Finally, return successful urls to the callback */
        urls.push(url)
        if (urls.length === files.length && cb) {
          cb(urls)
        }
      }
      xhr2.send(file)
    }
    xhr.send()
  })
}
