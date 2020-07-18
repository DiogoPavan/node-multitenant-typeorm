# POC de Multitenant usando o TypeORM

É uma prova de conceito para aplicar o Multitenant com banco de dados separados usando o TypeORM. 

O banco utilizado para esse experimento foi o PostgreSQL. Para simular o multitenant foram criados os seguintes bancos:
  - Master: Que faz o controler de conexão dos bancos dos tenants;
  - Bancos Tenants: são os bancos dos clientes e que serão acessados o tenant informado na url;
  
**Obs**: Foi feito alguns testes de Cache com o Redis, pois o intuito é separar o serviço que cuida da aplicação Master do server que cuida da aplicação para os Clientes Tenants.

## Tecnologias

Nesse projeto foram usados:
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)

