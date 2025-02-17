// Create web server
// Create a web server that listens on port 3000 and serves a page with the following content:
// <html>
//   <body>
//     <h1>Comments</h1>
//     <ul>
//       <li>Comment 1</li>
//       <li>Comment 2</li>
//       <li>Comment 3</li>
//     </ul>
//   </body>
// </html>
// Use the fs module to read the file comments.js and serve the content of the file as the response body.

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('./comments.js', 'utf8', (err, data) => {
    if (err) {
      res.write('Error reading file');
    } else {
      res.write(data);
    }
    res.end();
  });
}).listen(3000, () => {
  console.log('Server listening on port 3000');
});