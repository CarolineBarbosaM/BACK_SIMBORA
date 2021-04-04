# BACK-END SIMBORA
CRUD de usuário em Node.js, com Framework Adonis.js


## Executando o Projeto

### 1 - Clone o reposotório 

```bash
git clone https://github.com/CarolineBarbosaM/BACK_SIMBORA.git
```

### 2 - Instale a Dependências: 

```bash
npm install
```

### 3 - Adicione as configurações de acesso ao DB no .env
```
############## DATABASE ################

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=11111111
DB_DATABASE=teste
```

### 4 -  Migrations

Para inicialização da migration, segue o seguinte comando:

```js
adonis migration:run
```

### 5 - Execute o projeto

```bash
adonis serve --dev
```

E acesse o endereço: [localhost:3333](http://localhost:3000/)


### Variáveis de Ambiente (arquivo: ROOT_FOLDER > /.env)

```
HOST=localhost
PORT=3333
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}

CACHE_VIEWS=false

APP_KEY=

############## DATABASE ################

DB_CONNECTION=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_DATABASE=

############## HASH ################
HASH_DRIVER=

```
