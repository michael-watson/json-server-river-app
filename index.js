const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === 'POST') {
      req.body.createdAt = Date.now();
      req.body.id = `${req.body.email}-${req.body.siteCode}`;
    }
    // Continue to JSON Server router
    next()
  });

  server.use(router);

server.listen(4001, () => {
    console.log('JSON Server is running')
  });

console.log(server._router.stack);