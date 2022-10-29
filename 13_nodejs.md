# Introduction to Node.js

- `Node.js` uses the `V8` JavaScript enginge, enriched by extra APIs (e.g. to access local files on filesystem) and minus some browser-specific APIs (e.g. DOM API)
- to run js file with node, use your installed `Node.js` environment and execute `node app.js`
- `Node.js` works with utility modules that you can import and use
  - <https://nodejs.org/api/modules.html>
  - instead of `import` (ES6 modules), you use `const fs = require('fs')` (CommonJS modules)

## Working with HTTP Requests

- create a basic web server that runs locally

```JavaScript
const http = require('http');

// [1] send data from server to client
const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html'); // 'text/plain' would display exact string
  response.write('<h1>Hello</h1>');
  response.end();
})

// [2] receive data from client to server
const server = http.createServer((request, response) => {
  let body = [];
  console.log(request.method, request.url);

  // set listener a) to send data event and b) send data finished event
  request.on('data', (chunk) => {
    body.push(chunk);
  });

  request.on('end', () => {
    // rebuild sended data based on concatenated chunks
    body = Buffer.concat(body).toString();
    const userName = body.split('=')[1];

    response.setHeader('Content-Type', 'text/html');
    // use default browser POST behavior
    response.write(`
      <h1>Hello ${userName || 'Unknown User'}</h1>
      <form method="POST" action="/">
        <input name="username" type="text">
        <button type="submit">Send</button>
      </form>
    `);
    response.end();
  });
});

const PORT = 3001;

// listen() starts an ongoing server that can be accessed in browser with localhost:3000
server.listen(PORT);
```

## Framework and Tools

- example project uses:
  - `Express.js` is a framework to simplify working with Node.js
  - `body-parser`: npm package to parse the body of HTTP requests
  - `ejs`: npm package for embedded JavaScript templating for server-side rendered HTML

## Cross-Origin Resource Sharing (CORS)

![](/slides/45_cors.png)
