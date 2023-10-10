import jsonServer from 'json-server'
import cors from 'cors'
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);

server.post('/anecdotes', (request, response, next) => {
  const title = request.body.content
  if ( title.length<5 || null ) {
    return response.status(401).json({ error: "Title must be more than 5 characters" });
  }
  next(); 
});

server.use(middlewares)
server.use(cors())
server.use(router)


const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});