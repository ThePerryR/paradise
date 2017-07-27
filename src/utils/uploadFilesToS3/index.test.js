import mock from 'xhr-mock'

mock.setup()
jest.useFakeTimers()

import uploadFilesToS3 from './'

mock.get(/\/sign-s3\?file-name=(.*)\.txt&file-type=(.*)/, (req, res) => res
  .status(req.query().bucket !== 'fake-bucket' ? 200 : 500)
  .body(JSON.stringify({signedRequest: 'http://amazon.com', url: req.query()['file-name']})))

mock.put('http://amazon.com', (req, res) => res
  .status(req.body().type === 'text/plain' ? 200 : 500))

test('Throws error if files aren\'t passed in', () => {
  expect(uploadFilesToS3).toThrowError('Can only upload files to S3', 'test')
  expect(() => uploadFilesToS3('file')).toThrowError('Can only upload files to S3', 'test')
  expect(() => uploadFilesToS3(['file'])).toThrowError('Can only upload files to S3', 'test')
})

test('Throws an error if can\'t get signed request', () => {
  expect(() => {
    uploadFilesToS3([new File([''], 'filename.txt', {lastModified: new Date()})], 'fake-bucket')
    jest.runAllTimers()
  }).toThrowError('Could not get signed URL.')
})

test('Throws an error if can\'t upload to amazon', () => {
  expect(() => {
    uploadFilesToS3([new File([''], 'filename.txt', {type: 'text/plains', lastModified: new Date()})], 'test')
    jest.runAllTimers()
  }).toThrowError('Could not upload file.')
})

test('Returns an array of successful urls', () => {
  uploadFilesToS3([
    new File([''], 'filename1.txt', {type: 'text/plain', lastModified: new Date()}),
    new File([''], 'filename2.txt', {type: 'text/plain', lastModified: new Date()})
  ], 'test', (urls) => {
    expect(urls[0]).toBe('filename1.txt')
    expect(urls[1]).toBe('filename2.txt')
  })
  jest.runAllTimers()
})