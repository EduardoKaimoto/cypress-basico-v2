Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Eduardo')
    cy.get('#lastName').type('Kaimoto')
    cy.get('#email').type('han@email.com')
    cy.get('#open-text-area').type('Everybody Hates Chris')
    cy.contains('button', 'Enviar').click()
})