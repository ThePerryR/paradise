export default function (file, bucket) {
  return new Promise((resolve, reject) => {
    if(!(file instanceof File) || typeof bucket !== 'string') {
      return reject('Please provide a valid file and S3 bucket')
    }
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `/sign-s3?file-name=${Date.now() + (Math.floor(Math.random() * 100) + 1)}&file-type=${file.type}&bucket=${bucket}`)
    xhr.onreadystatechange = () => {
      console.log(xhr.readyState)
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          return reject('Could not get signed URL.')
        }
        /* Upload File to Amazon */
        resolve(JSON.parse(xhr.responseText))
      }
    }
    xhr.send()
  })
}
