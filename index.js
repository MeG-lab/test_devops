const http = require('node:http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  res.end(`<h1>Hello DIG!</h1><p>时间：${new Date().toLocaleString()}</p>`)
})

if (require.main === module) {
  server.listen(3000, () => {
    console.log('http://localhost:3000')
  })
}

module.exports = server

// 这是错误的代码！！！！
