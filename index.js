const http = require('http');
const router = require('./router');

const port = 3000;
const app = http.createServer(router);

app.listen(port);
console.log(`Server running on port number: ${port}`);
