# Dragon Ball Manager

> Projeto Crie um Gerenciador de Esferas do Dragon BallZ Usando ReactJS, Jest, React Testing Library e Cypress da DIO

## Tecnologias

- Typescript / Javascript
- React.js
- Tailwind CSS
- Jest (tests)
- React Testing Library (tests)
- Cypress (tests)

### Diferenças com o projeto de referência

- Uso do Typescript ao invés do Javascript puro
- Uso do Tailwind CSS e Radix UI ao invés de bootstrap, reactstrap, rebass, theme-ui e styled-components
- Versões mais novas das tecnologias
- Tema dark e light
- Uso da biblioteca Framer Motion ao invocar Shenlong

## Desafios

Esta é uma aplicação para você poder invocar Shenlong, porém ela tem alguns probleminhas, e além desses probleminhas pra serem resolvidos vocês precisam adicionar testes.

Ja temos o [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) e [Cypress](https://www.cypress.io/) instalados. Todas essas libs são ferramentas de testes

Aqui vão alguns casos para testar porém você pode ir além:

- Testar o filtro no select para exibir todas as esferas, as esferas que eu tenho e as que eu não tenho
- Se eu tiver todas as esferas tenho que conseguir invocar o shenlong
- ... O que mais você desejar! Solte a imaginação!

### Desafios realizados

#### No projeto original clonado

- [Repositório clonado com erros corrigidos e testes implementados](https://github.com/rodolfoHOk/dio.dragon-ball-manager-challenge)

#### Testes implementados neste projeto refeito usando as tecnologias citadas

- test address form page: should render address form
- test address form page: should fetch of cep data and fill the form
- invocation action component test: should render invocation action
- invocation action component test: should show toast if user do not have all balls
- invocation action component test: should show shenlong if user has all balls
- ball card list component test: should render ball card list
- ball card list component test: should filter my balls
- ball card list component test: should filter not founded balls
- ball card list component test: should not filter when all is selected
- ball card list component test: should open validate ball modal
- ball card list component test: should show toast if enter with invalid code
- ball card list component test: should validate ball code

- address form page e2e test: should request cep address and fill form fields
- dragon balls manager page e2e test: should filter my balls
- dragon balls manager page e2e test: should filter not founded balls
- dragon balls manager page e2e test: should no filter balls if all is selected
- dragon balls manager page e2e test: should show invalid ball code toast
- dragon balls manager page e2e test: should not invoke if user does not have 7 dragon balls
- dragon balls manager page e2e test: should invoke if user has 7 dragon balls

## Imagens do projeto

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/dragon-ball-manager-01.png" alt="Dragon Ball Manager 01" height="400" />

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/dragon-ball-manager-02.png" alt="Dragon Ball Manager 02" height="400" />

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/dragon-ball-manager-03.png" alt="Dragon Ball Manager 03" height="400" />

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/dragon-ball-manager-04.png" alt="Dragon Ball Manager 04" height="400" />

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/dragon-ball-manager-05.png" alt="Dragon Ball Manager 05" height="400" />

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/dragon-ball-manager-06.png" alt="Dragon Ball Manager 06" height="400" />

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/dragon-ball-manager-07.png" alt="Dragon Ball Manager 07" height="400" />

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/dragon-ball-manager-08.png" alt="Dragon Ball Manager 08" height="400" />

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/dragon-ball-manager-09.png" alt="Dragon Ball Manager 09" height="400" />

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/dragon-ball-manager-10.png" alt="Dragon Ball Manager 10" height="400" />

## Guia

- iniciando projeto: npx create-react-app dragon-ball-manager --template typescript

- cypress open: npx cypress open

## Links

- [Projeto de Referência da DIO](https://github.com/lalizita/dragon-ball-manager-challenge)

- [Remove BG](https://www.remove.bg/pt-br)

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

- [Cypress docs](https://docs.cypress.io/guides/overview/why-cypress)

- [Cypress migration-guide](https://docs.cypress.io/guides/references/migration-guide)

- [Cypress commands](https://docs.cypress.io/api/table-of-contents)

## Como rodar

Para fazer este repositório funcionar você deve clonar este repositório e ter no Node.js 20 instalado

Instalar as dependências e rodar:

```
  npm install
  npm run start
```

Para rodar os testes com testing library

```
  npm run test
```

Para rodar os testes com Cypress

```
  npm run cy:run
```
