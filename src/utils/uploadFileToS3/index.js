export default function (file, signedRequest) {
  return new Promise((resolve, reject) => {
    if (!(file instanceof File) || typeof signedRequest !== 'string') {
      return reject(new Error('Please provide a file and a signedRequest url.'))
    }

    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          return reject(new Error('Could not upload file.'))
        }
        resolve()
      }
    }
    xhr.open('PUT', signedRequest)
    xhr.send(file)
  })
}
