
context('Contents of Front page', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  describe('Front page is showing static contents', function() {
    it('.should() - make an assertion about front navbar', function() {
      cy.contains('Koti')
      cy.contains('Kirjat')
      cy.contains('Kurssit')
      cy.contains('Hakkerit')
    })

    it('.should() - make an assertion about front page html', function() {
      cy.contains('Tervetuloa Hakkeri Portaaliin!')
      cy.contains('Hack \'O meter')
    })
  })

  describe('Front page is showing review counts correctly', function() {
    it('.should() - show reviews count at start up', function() {
      cy.wait(4000)
      cy.get('.list-group-item')
        .should('have.length.at.least', 10)

      cy.get('html').should('contain', 'December 2020')
    })
  })
})