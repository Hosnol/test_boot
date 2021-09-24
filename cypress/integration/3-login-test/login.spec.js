describe('Login test', () => {
    it('Login scenario', () => {
      cy.visit('######') // type your website addres 
      cy.get('#username').type('####') // type your username
      cy.get('#password').type('####') // type password
      cy.get('.form-actions > .btn').click()
      cy.title().should('include','Sistem Informasi Akademik')
    })
})