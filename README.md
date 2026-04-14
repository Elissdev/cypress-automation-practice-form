# Automação de Testes E2E - Demo Automation Registration

Este projeto é um laboratório de automação de testes focado na prática de mapeamento de elementos complexos e geração de evidências profissionais utilizando **Cypress** e **JavaScript**.

O objetivo principal é validar o fluxo de registo no site [Automation Demo Site](https://demo.automationtesting.in/Register.html), cobrindo diversos tipos de interações de interface.

## Tecnologias Utilizadas

* [Cypress](https://www.cypress.io/) - Framework de automação.
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação.
* [Mochawesome](https://www.npmjs.com/package/cypress-mochawesome-reporter) - Gerador de relatórios HTML.
* [Puppeteer](https://pptr.dev/) - Utilizado para conversão de relatórios HTML para PDF.

## Funcionalidades Testadas

O script de teste (`registro.cy.js`) realiza as seguintes validações:
- Preenchimento de campos de texto (Nome, Morada, Email, Telefone).
- Interação com Radio Buttons (Género) e Checkboxes (Hobbies).
- Seleção em Dropdowns (Habilidades e Data de Nascimento).
- Upload de ficheiro (Foto de perfil).
- Validação de segurança (Campos de Senha).

## Como Executar o Projeto

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/Elissdev/cypress-automation-practice-form.git](https://github.com/Elissdev/cypress-automation-practice-form.git)

 2.  Instalar as dependências:

Bash
npm install

3. Executar os testes em modo visual (Interface):

Bash
npx cypress open

4. Executar os testes em modo headless (Terminal) e gerar relatórios:

Bash
npx cypress run

5. Relatórios e Evidências
6. 
Após a execução em modo headless, os resultados são guardados na pasta cypress/reports:

HTML: Relatório interativo gerado automaticamente.

PDF: Para gerar a versão em PDF do relatório, após o término dos testes, execute:

Bash
node gerar-pdf.js

Projeto desenvolvido por Elissandra Santos da Silva.