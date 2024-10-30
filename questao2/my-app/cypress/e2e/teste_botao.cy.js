describe('Teste botão enviar', () => {
  it('Deve mostrar a mensagem "Enviado com sucesso!" ao clicar no botão', () => {
    cy.visit('localhost:3000')
    cy.get('.Button1').should('be.visible').click()

    cy.contains('Enviado com sucesso!').should('be.visible')
  })
})