
context('Contents and navigation of Front page', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })
       
  describe('Front page is showing static contents', function() {
    it('.should() - make an assertion about front navbar', function() {
      cy.contains('Koti')
      cy.contains('Kirjat')
      cy.contains('Hakkerit')
    })

    it('.should() - make an assertion about front page html', function() {
      cy.contains('Hakkeri Portaali')
      cy.contains('Uusimmat kirja-arviot')
    })
  })

  describe('Front page is showing reviews correctly', function() {
    it('.should() - show 5 reviews at start up', function() {
      cy.get('.card').should('have.length', 5)
    })

    it('.should() - show 10 reviews when clicked once', function() {
      cy.contains('Lataa lisää')
      cy.get('#show-more-button').click()
      cy.get('.card').should('have.length', 10)
    })

    it('.should() - show 15 reviews when clicked twice', function() {
      cy.contains('Lataa lisää')
      cy.get('#show-more-button').click()
      cy.get('#show-more-button').click()
      cy.get('.card').should('have.length', 15)
    })
  })

  describe('Navigation bar is redirecting correctly', function() {
    it('.should() - navigate to books page', function() {
      cy.get('#navbar').contains('Kirjat').click()

      cy.location('pathname').should('include', 'books')
      cy.go('back')
      cy.location('pathname').should('not.include', 'book')
      cy.go('forward')
      cy.location('pathname').should('include', 'books')    
    })

    it('.should() - navigate to hackers page', function() {
        cy.get('#navbar').contains('Hakkerit').click()
  
        cy.location('pathname').should('include', 'hackers')
        cy.go('back')
        cy.location('pathname').should('not.include', 'hackers')
        cy.go('forward')
        cy.location('pathname').should('include', 'hackers')
      })
  })
})