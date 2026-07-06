# Formula One API

API simples em Node.js, TypeScript e Fastify para listar, buscar e cadastrar dados em memoria sobre equipes e pilotos de Formula 1.

## Tecnologias

- Node.js
- TypeScript
- Fastify
- @fastify/cors
- TSX
- TSUP

## Como rodar

Instale as dependencias:

```bash
npm install
```

Rode o servidor em modo desenvolvimento:

```bash
npm run start:dev
```

O servidor roda em:

```txt
http://localhost:3333
```

## Scripts

- `npm run start:dev`: inicia o servidor em modo desenvolvimento.
- `npm run start:watch`: inicia o servidor com recarregamento automatico.
- `npm run dist`: gera a build do projeto.
- `npm run start:dist`: gera a build e executa a versao compilada.

## Rotas

### Health/base URL

```txt
http://localhost:3333
```

### Listar equipes

```http
GET /teams
```

Retorna 5 equipes cadastradas em memoria.

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "name": "Ferrari",
    "base": "Maranello, Italy"
  }
]
```

### Cadastrar equipe

```http
POST /teams
```

Body:

```json
{
  "name": "Williams",
  "base": "Grove, United Kingdom"
}
```

Retorna a equipe criada com status `201`.

### Listar pilotos

```http
GET /drivers
```

Retorna 5 pilotos cadastrados em memoria.

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "name": "Charles Leclerc",
    "team": "Ferrari",
    "country": "Monaco"
  }
]
```

### Cadastrar piloto

```http
POST /drivers
```

Body:

```json
{
  "name": "George Russell",
  "team": "Mercedes",
  "country": "United Kingdom"
}
```

Retorna o piloto criado com status `201`.

### Buscar piloto por ID

```http
GET /drivers/:id
```

Exemplo:

```http
GET /drivers/1
```

Caso o piloto exista, retorna os dados dele. Caso contrario, retorna `404`.

Resposta quando nao encontra:

```json
{
  "message": "Driver not found"
}
```

## Observacoes

- Os dados ficam apenas em memoria.
- Ao reiniciar o servidor, novos cadastros feitos por `POST` sao perdidos.
- O CORS esta liberado para qualquer origem.

## Estrutura atual

```txt
src/
  server.ts
```

O arquivo `src/server.ts` concentra a configuracao do Fastify, os dados em memoria e as rotas da API.
