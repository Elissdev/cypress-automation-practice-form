import 'cypress-mochawesome-reporter/register';

// Import commands.js using ES2015 syntax:
import './commands'

// Oculta erros internos do site (uncaught exceptions) para que não quebrem os testes do Cypress
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retornar false impede o Cypress de falhar o teste
  return false;
});