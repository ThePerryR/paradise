import mock from 'xhr-mock'

mock.setup()

mock.get(/\/sign-s3\?file-name=(.*)&file-type=(.*)&bucket=(.*)/, (req, res) => res
  .status(req.query().bucket !== 'fake-bucket' ? 200 : 500)
  .header('Content-Type', 'application/json')
  .body(JSON.stringify({signedRequest: 'http://amazon.com', url: req.query()['file-name']})))


mock.put('http://amazon.com', (req, res) => res.status(req.body().type === 'text/plain' ? 200 : 500))