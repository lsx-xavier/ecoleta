import express from 'express';

const app = express();

app.use(express.json());

const users = [
  'Diego',
  'Lucas',
  'Robson',
  'Susana'
];

app.get('/users', (request, response) => {
  console.log('Listagem de usuário');

  const search = String(request.query.search);
  
  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
  
  return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
  console.log('Listagem de 1 usuário');
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post('/users', (request, response) => {
  console.log('Criando um usuário');

  const data = request.body;

  console.log(data);

  const user = {
    name: data.name,
    email: data.email
  };

  return response.json(user);
});

app.listen(3333);