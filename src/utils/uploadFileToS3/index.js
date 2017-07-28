export default function (file, signedRequest) {
  return new Promise((resolve, reject) => {
    if(!(file instanceof File) || typeof signedRequest !== 'string') {
      return reject('Please provide a file and a signedRequest url.')
    }

    const xhr = new XMLHttpRequest()
    xhr.open('PUT', signedRequest)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          return reject('Could not upload file.')
        }
        resolve()
      }
    }
    xhr.send(file)
  })
}
