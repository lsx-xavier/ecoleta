# Apontamentos do aplicativo

Usamos uma relação de muitos para muitos (Many to Many) para relacionar os items com os points (pontos) de coleta.

# Anotações

Rota: Endereço completo da reqisição;
Recurso: Qual entidade estamos acessando do sistema (/users -> exemplo);

GET: Buscar 1 ou mais informações do back-end;
POST: Criar uma nova informação no back-end;
PUT: Atualizar uma informação existente no back-end;
DELETE: Deletar uma informação do back-end;

Rotas são muito dinamicas, exemplos:
POST http://localhost:3333/users -> Criar um usuário;
GET http://localhost:3333/users -> Listar os usuários;
GET http://localhost:3333/users/5 -> Listar o usuário com o ID=5;

## Parâmetros

São informações passadas na rota para a entidade.

Resquest Param: Parâmetros que vem na própria rota que identificam um recurso (const id = Number(request.params.id); | http://localhost:3333/users/5);

Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação... (const search = request.query.search; | http://localhost:3333/users?search=XXX);

Request body: Parâmetros para criação/atualização de informações, passado belo body;
