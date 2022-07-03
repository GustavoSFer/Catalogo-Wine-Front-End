# Wine
  * Gostaria de acessar a aplicação?
    Link: https://wine-vinhos-front.herokuapp.com/

### Bem vindo a aplicação e-commerce da Wine

<h2>Descrição:</h2>
<p>Implementar um e-commerce para venda de vinhos que deverá ter as seguintes funcionalidades:</p>
<ul>
  <li>Catálogo de produtos com paginação</li>
  <li>Filtragem produtos por preço</li>
  <li>Busca por nome do produto</li>
  <li>Adicionar e remover produtos do carrinho</li>
</ul>

## TECNOLOGIAS UTILIZADOS
<ul>
  <li>React</li>
  <li>Context API</li>
  <li>React-Router-Dom</li>
  <li>Bootstrap</li>
  <li>React Testing Library</li>
</ul>

# Instruções para iniciar o projeto

1. Clone o repositório
  * Chave SSH
    * `git clone git@github.com:GustavoSFer/Catalogo-Wine-Front-End.git`
  * HTTPS
    * `git clone https://github.com/GustavoSFer/Catalogo-Wine-Front-End.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd Catalogo-Wine-Front-End`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador)

## Utilizando o projeto com o Docker

1. Crie a imagem no docker
  * docker build -t <'NomeDaImagem'> .
2. Crie o container no docker
  * docker container run -p 3000:3000 <'NomeDaImagem'>