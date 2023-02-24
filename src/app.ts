import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export const app = express();
app.use(morgan('dev'));
app.use(express.json);
app.use(cors);

app.use((_req, _resp, next) => {
  console.log('Soy middleware');
  next();
});

// Get es un tipo de rooter.
// Post, delete , path son otros tipos de rooter
// Resp.end();
//  resp.header();
// resp.status();
// Resp.send();

app.get('/', (_req, resp) => {
  resp.json({
    name: 'Pepe',
    age: 22,
  });
});

app.get('/:id', (req, resp) => {
  resp.send('Hola' + req.params.id);
});
app.post('/', (req, resp) => {
  console.log(req.body);
  resp.send(req.body);
});
app.patch('/:id');
app.delete('/:id');
