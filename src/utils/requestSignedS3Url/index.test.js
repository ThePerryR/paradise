import requestSignedS3Url from './'

jest.useFakeTimers()

const file = new File([''], 'filename.txt', {type: 'text/plain', lastModified: new Date()})

test('Rejects if file or bucket isn\'t passed', () => {
  expect.assertions(2)
  expect(requestSignedS3Url('this-is-a-file', 'test-bucket')).rejects.toEqual('Please provide a valid file and S3 bucket')
  expect(requestSignedS3Url(file)).rejects.toEqual('Please provide a valid file and S3 bucket')
})
test('Rejects if can\'t get signed URL', () => {
  expect.assertions(1)
  expect(requestSignedS3Url(file, 'fake-bucket')).rejects.toEqual('Could not get signed URL.')
  jest.runOnlyPendingTimers()
})
test('Resolves with signedUrl', () => {
  expect.assertions(1)
  const request = requestSignedS3Url(file, 'test-bucket')
  jest.runOnlyPendingTimers()
  return request.then(data => expect(data.signedRequest).toBe('http://amazon.com'))
})