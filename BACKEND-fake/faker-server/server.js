const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

var db = require('./db.json');

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// rewrite rules - add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/people': '/people',
    '/api/products': '/products',
    '/api/todos': '/todos'
}));

// GET routes with queries
server.get('/get/person', (req, res) => {
    if (req.method === 'GET') {
        let personId = req.query['id'];
        console.log('personId:' +personId)
        if (personId != null && personId >= 0) {
            let result = db.people.find(person => {
                console.log('person.id:' +person.id )
                return person.id === personId;
            });

            if (result) {
                // return user without id
                let {id, ...person} = result;
                res.status(200).jsonp(person);
            } else {
                res.status(400).jsonp({
                    error: "Bad person id "
                });
            }
        } else {
            res.status(400).jsonp({
                error: "No valid person id"
            });
        }
    }
});

// POST routes
//curl -d "id=4" http://localhost:3000/post/person
server.post('/post/person', (req, res) => {
    if (req.method === 'POST') {
        let personId = req.body['id'];
        console.log('userId: ' +personId)
        if (personId != null && personId >= 0) {
            let result = db.people.find(person => {
                console.log(person.id === personId)
                return person.id === personId;
            });

            if (result) {
                let {id, ...person} = result;
                res.status(200).jsonp(person);
            } else {
                res.status(400).jsonp({
                    error: "Bad person id"
                });
            }
        } else {
            res.status(400).jsonp({
                error: "No valid person id"
            });
        }
    }
});

// Use default router
server.use(router);

module.exports = server

