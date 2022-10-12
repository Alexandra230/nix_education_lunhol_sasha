let http = require('http');
const fs = require('fs');
const csv = require('csv-parser');

const host = 'localhost';
const port = 8000;
let result = [];
const requestListener = function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  fs.createReadStream(__dirname + '/device.csv')
    .pipe(csv())
    .on('data', (data) => result.push(data))
    .on('end', () => {
      res.end(JSON.stringify(result));
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
