Star Wars App
============

## Descrição

O Star Wars App é um simples web app que lista e realiza a pesquisa dos personagens da famosa série Star Wars.
A aplicação utiliza a API Rest SWAPI para listar os personagens.
A solução foi implementada utizando o React JS, AntDesign, Jest, e TailWind.

## Prerequisites 
- [Node](https://nodejs.org/pt-br/download/)
- [Docker](https://www.docker.com/)

## Utilização com Docker
Comandos para executar o projeto

Clone repository with branch main
```bash
git clone https://github.com/gabrielripardo/starwars-app.git
```
Open the repository of the directory
```bash
cd starwars-app
```
Run the command for create Docker Container 
```bash
docker build -t challenge-app:latest .
```
Await for node npm to complete the installation.

Run the command for run the Container
```
docker run --name starwars-front -d -p 3000:3000 challenge-app:latest  
```

And now open the application in browser
```
http://localhost:3000
```

## Utilização sem o Docker
Comandos para executar o projeto

Clone repository with branch main
```bash
git clone https://github.com/gabrielripardo/starwars-app.git
```
Open the repository of the directory
```bash
cd starwars-app
```
Run the command for install all dependencies
```bash
npm install 
```
Await for node npm to complete the installation.

Run the command for start the application
```
npm start
```

And now open the application in browser
```
http://localhost:3000
```

## Autor

- [Gabriel Ripardo](https://github.com/gabrielripardo/)

## Tenologias

For more information
- [React JS](https://pt-br.reactjs.org/)
- [Ant Design](https://ant.design/)
- [TailWind](https://tailwindcss.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [API SWAPI](https://swapi.dev/)
