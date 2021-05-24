// Documentation: https://github.com/typicode/json-server
// for faker products we use json-server from ./node_modules/.bin/json-server on port: 3000
const server = require('./server');
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('JSON Server is running:  http://localhost:' + port)
});

