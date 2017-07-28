import uploadFileToS3 from './'

jest.useFakeTimers()

const signedRequest = 'http://amazon.com'
const goodFile = new File([''], 'filename.txt', {type: 'text/plain', lastModified: new Date()})
const badFile = new File([''], 'filename.txt', {type: 'text/fake', lastModified: new Date()})

test('Throws error if no file or signedRequest is provided', () => {
  expect.assertions(3)
  uploadFileToS3(null, signedRequest)
    .catch(err => expect(err).toBe('Please provide a file and a signedRequest url.'))
  uploadFileToS3('not-a-file', signedRequest)
    .catch(err => expect(err).toBe('Please provide a file and a signedRequest url.'))
  uploadFileToS3(goodFile)
    .catch(err => expect(err).toBe('Please provide a file and a signedRequest url.'))
})

test('Throws an error if can\'t upload to amazon', () => {
  expect.assertions(1)
  uploadFileToS3(badFile, signedRequest).catch(err => expect(err).toBe('Could not upload file.'))
  jest.runAllTimers()
})

test('Returns an array of successful urls', () => {
  expect.assertions(1)
  expect(uploadFileToS3(goodFile, signedRequest)).resolves.toBeUndefined()
  jest.runAllTimers()
})
