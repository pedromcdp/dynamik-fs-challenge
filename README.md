# Desafio FullStack Dynamik

O presente repositório foi criado para responder ao desafio FullStack da Dynamik.

## Tech Stack

**Client:** React 18, Next.js 14, TailwindCSS 3, React-Hook-Form 7

**Server:** Next.js 14, MongoDB,

O stack foi selecionado, de forma a tornar o desenvolvimento do desafio mais eficiente e eficaz. Usando a Framework Next.js e sendo ela uma Framework FullStack, deu-me a possibilidade de não ter de configurar duas pastas diferentes. Em relação há escolha da base de dados, tendo em conta a estrutura de dados fornecidos, optei pelo uso da BD mongoDB pois a estrutura de dados era simples, não seriam preciso relações e também seria mais rápida.

## Instalar dependências e iniciar a app

Clonar o projeto

```bash
  git clone https://github.com/pedromcdp/dynamik-fs-challenge.git
```

Aceder à pasta do repositório

```bash
  cd dynamik-fs-challenge
```

#### Executar o projeto

#### Docker

```bash
  docker-compose up
```

Depois ir browser e aceder a localhost:3000

#### NPM

Instalar as dependências

```bash
  npm i
```

Build app

```bash
  npm run build
```

Iniciar o server

```bash
  npm run start
```

## .Env

Caso o projeto não seja iniciado através do Docker, será necessário adicionar as seguintes variáveis ao ficheiro .env

`DATABASE_URL` - MongoDB URI

## Referência da API

#### Get Developers by term

```http
  GET /api/devs
```

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `term`    | `string` | **Required**. term to fetch dev |

#### Get specific developer

```http
  GET /api/devs/${id}
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Required**. Id of dev to fetch |

#### Post item

```http
  POST /api/devs
```

| Parameter    | Type     | Description                        |
| :----------- | :------- | :--------------------------------- |
| `nickname`   | `string` | **Required**. nickname do dev      |
| `name`       | `string` | **Required**. nome do dev          |
| `birth_date` | `date`   | **Required**. formato (YYYY-MM-DD) |
| `stack`      | `array`  | **Required**. stack do dev         |

## Referência de cores

| Color         | Hex                                                                 |
| ------------- | ------------------------------------------------------------------- |
| Branco        | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF    |
| Preto         | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000    |
| Azul          | ![#006FEE](https://via.placeholder.com/10/006FEE?text=+) #006FEE    |
| Cizento Claro | ![##E4E4E7](https://via.placeholder.com/10/#E4E4E7?text=+) ##E4E4E7 |

## Autor

- [@pedromcdp](https://www.github.com/pedromcdp)
