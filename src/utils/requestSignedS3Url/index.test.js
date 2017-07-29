import requestSignedS3Url from './'

const file = new File([''], 'filename.txt', {type: 'text/plain', lastModified: new Date()})

test('Rejects if file or bucket isn\'t passed', () => {
  expect.assertions(2)
  requestSignedS3Url('this-is-a-file', 'test-bucket')
    .catch(err => expect(err.message).toBe('Please provide a valid file and S3 bucket'))
  requestSignedS3Url(file)
    .catch(err => expect(err.message).toBe('Please provide a valid file and S3 bucket'))
})
test('Rejects if can\'t get signed URL', () => {
  expect.assertions(1)
  requestSignedS3Url(file, 'fake-bucket').catch(err => expect(err.message).toBe('Could not get signed URL.'))
})
test('Resolves with signedUrl', () => {
  expect.assertions(1)
  requestSignedS3Url(file, 'test-bucket').then(data => expect(data.signedRequest).toBe('http://amazon.com'))
})
