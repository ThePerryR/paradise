import queryString from 'query-string'

class Mock {
  mocks = {
    get: [],
    put: []
  }
  setup = () => {
    global.XMLHttpRequest = XMLHttpRequest
  }
  get = (path, handler) => {
    this.mocks.get.push([path, handler])
  }
  put = (path, handler) => {
    this.mocks.put.push([path, handler])
  }
}

const mock = new Mock()

export class XMLHttpRequest {
  method = null
  path = null
  readyState = 0
  onreadystatechange = null
  status = null
  responseText = null
  body = null
  open = (method, path) => {
    this.status = null
    this.responseText = null
    this.body = null
    this.readyState = 1
    this.trigger()
    this.method = method
    this.path = path
  }

  trigger = () => {
    if (this.onreadystatechange) {
      this.onreadystatechange()
    }
  }
  send = (data) => {
    this.body = data
    this.readyState = 2
    this.trigger()
    const mockMethods = mock.mocks[this.method.toLowerCase()]
    if (mockMethods) {
      const path = mockMethods.find(pathAndHandler => {
        if (pathAndHandler[0] instanceof RegExp) {
          return pathAndHandler[0].test(this.path)
        } else {
          return pathAndHandler[0] === this.path
        }
      })
      const handler = path[1]
      handler(this.req, this.res)
      this.readyState = 4
      this.trigger()
    }
  }

  req = {
    query: () => queryString.parse(this.path),
    body: () => this.body
  }

  res = {
    parent: this,
    status: function (status) {
      this.parent.status = status
      return this
    },
    header: function () {
      this.parent.readyState = 2
      this.parent.trigger()
      return this
    },
    body: function (responseText) {
      this.parent.responseText = responseText
      return this
    }
  }
}

mock.setup()

mock.get(/\/sign-s3\?file-name=(.*)&file-type=(.*)&bucket=(.*)/, (req, res) => {
  return res
    .status(req.query().bucket !== 'fake-bucket' ? 200 : 500)
    .header('Content-Type', 'application/json')
    .body(JSON.stringify({signedRequest: 'http://amazon.com', url: req.query()['file-name']}))
})

mock.put('http://amazon.com', (req, res) => {
  res.status(req.body().type === 'text/plain' ? 200 : 500)
})
