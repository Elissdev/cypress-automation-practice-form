describe('Funcionalidade de Registro Completa', () => {

  beforeEach(() => {
    cy.visit('https://demo.automationtesting.in/Register.html');
  });

  it('Deve preencher o formulário de ponta a ponta e validar', () => {
    // 1. DADOS PESSOAIS E CONTATO
    cy.get('input[placeholder="First Name"]').type('Elissandra');
    cy.get('input[placeholder="Last Name"]').type('Silva');
    
    // Mapeando a área de texto (textarea) e digitando um endereço longo
    cy.get('textarea[ng-model="Adress"]').type('Rua da Automação com Cypress, 1024, Pop!_OS');
    
    // Mapeando os campos de email e telefone pelo tipo (type) do input
    cy.get('input[type="email"]').type('eli.qa@exemplo.com.br');
    cy.get('input[type="tel"]').type('11999999999');

    // 2. OPÇÕES DE GÊNERO E HOBBIES
    cy.get('input[value="FeMale"]').check();
    cy.get('#checkbox1').check(); // Cricket
    cy.get('#checkbox3').check(); // Hockey

    // 3. DROPDOWNS BÁSICOS E DATA DE NASCIMENTO
    cy.get('#Skills').select('Javascript');
    
    // A data de nascimento é dividida em 3 selects diferentes
    cy.get('#yearbox').select('1995'); // Ano
    cy.get('select[placeholder="Month"]').select('March'); // Mês
    cy.get('#daybox').select('15'); // Dia

    // 4. UPLOAD DE ARQUIVO (Imagem de perfil)
    // O Cypress vai buscar o arquivo 'foto.jpg' lá na pasta cypress/fixtures
    cy.get('#imagesrc').selectFile('cypress/fixtures/foto.jpg');

    // 5. SEGURANÇA (Senhas)
    cy.get('#firstpassword').type('SenhaForte123!');
    cy.get('#secondpassword').type('SenhaForte123!');

    // 6. AÇÃO FINAL
    cy.get('#submitbtn').click();

    // 7. ASSERÇÃO - VALIDANDO O RESULTADO
    // Aqui validamos se o botão Submit ainda existe na tela após o clique
    // Em um sistema real, validaríamos uma mensagem de sucesso ou mudança de URL
    cy.get('#submitbtn').should('be.visible');
  });

});