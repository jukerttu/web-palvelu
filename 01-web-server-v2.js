  // Usage: node 01-web-server-v2.js
    
  const http = require('http')
    
  const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}) // text/html - HTML -koodia, text/plain - plain text, text/xml - XML -koodia
    for (var i=0; i<100000; i++)
        res.write('<h1>Hello NodeJs ' + i + "</h1>")
    res.end()
  })
  
  // server listening at port 8888
  server.listen(8888, '127.0.0.1')
  
  console.log('Server running at http://127.0.0.1:8888/')