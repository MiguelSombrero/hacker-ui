
context('Contents and navigation of Books page', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000/books')
  })
       
  describe('Books page is showing static contents', function() {
    it('.should() - make an assertion about front navbar', function() {
      cy.contains('Koti')
      cy.contains('Kirjat')
      cy.contains('Hakkerit')
    })
  })

  describe('Books page is showing books correctly', function() {
    it('.should() - show more than 10 books at start up', function() {
      cy.get('.list-group-item')
        .should('have.length.at.least', 10)
    })
  })

  describe('Navigation bar is redirecting correctly', function() {
    it('.should() - navigate to home page', function() {
      cy.get('#navbar').contains('Koti').click()

      cy.location('pathname')
        .should('not.include', 'books')

      cy.go('back')

      cy.location('pathname')
        .should('include', 'books')    
    })

    it('.should() - navigate to hackers page', function() {
        cy.get('#navbar').contains('Hakkerit').click()
  
        cy.location('pathname')
          .should('include', 'hackers')
        
          cy.go('back')

        cy.location('pathname')
          .should('not.include', 'hackers')

        cy.go('forward')

        cy.location('pathname')
          .should('include', 'hackers')
      })
  })

  describe('Filtering books works', function() {
    it('filter finds all matches', function() {
      cy.get('#filter-books-field')
        .type('clean')
        .should('have.value', 'clean')

      cy.get('.list-group-item')
        .should('have.length', 3)
      
      cy.get('html')
        .should('contain', 'Clean Code')
        .and('contain', 'Clean Architecture')

      cy.get('#filter-books-field')
        .clear()
        .should('not.have.value', 'clean')
    })

    it('filter eliminates non-matches', function() {
      cy.contains('Geenin Itsekkyys')

      cy.get('#filter-books-field')
        .type('clean')

      cy.get('.list-group-item')
        .should('have.length', 3)
      
      cy.get('html')
        .should('not.contain', 'Geenin Itsekkyys')
        .and('not.contain', 'Katriina')
    })

    it('filter needs exact match', function() {
      cy.get('#filter-books-field')
        .type('katrina')
  
      cy.get('.list-group-item')
        .should('have.length', 0)
      
      cy.get('#filter-books-field')
        .clear()

      cy.get('.list-group-item')
        .should('have.length.at.least', 10)

      cy.get('#filter-books-field')
        .type('katriinaa')
  
      cy.get('.list-group-item')
        .should('have.length', 0)
    })
  })
})