const fs = require('fs');

function readHTMLFile(fileName) {
  try {
    const fileContent = fs.readFileSync(fileName);
    return fileContent;
  } catch (err) {
    console.log(err.message);
    return '';
  }
}

const routes = {
  '/': './views/index.html',
  '/about': './views/about.html',
  '/profile': './views/profile.html',
};

function handle(request, response) {
  const url = request.url;
  console.log(`Someone opens ${url}`);

  response.setHeader('Content-Type', 'text/html');
  if (!routes[url]) {
    response.statusCode = 404;
    response.end('<h1>Page not found</h1>');
  } else {
    response.statusCode = 200;
    response.end(readHTMLFile(routes[url]));
  }
}

module.exports = handle;
