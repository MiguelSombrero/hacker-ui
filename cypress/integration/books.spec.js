
context('Contents of Books page', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000/books')
    cy.get('#filter-books-field').clear()
    cy.wait(4000)
  })

  describe('Books page is showing static contents', function() {
    it('.should() - make an assertion about front navbar', function() {
      cy.contains('Koti')
      cy.contains('Kirjat')
      cy.contains('Kurssit')
      cy.contains('Hakkerit')
      cy.contains('Etsi kirjoja')
    })
  })

  describe('Books page is showing books correctly', function() {
    it('.should() - show 10 books at start up', function() {
      cy.get('#books-column')
        .find('.list-group-item')
        .should('have.length', 10)
    })

    it('.should() - show 20 books when clicked once', function() {
      cy.contains('Lataa lisää kirjoja')
      cy.get('#show-more-books-button').click()

      cy.get('#books-column')
        .find('.list-group-item')
        .should('have.length', 20)
    })

    it('.should() - show 30 books when clicked twice', function() {
      cy.contains('Lataa lisää kirjoja')
      cy.get('#show-more-books-button').click()
      cy.get('#show-more-books-button').click()

      cy.get('#books-column')
        .find('.list-group-item')
        .should('have.length', 30)
    })
  })

  describe('Books page is showing reviews counts correctly', function() {
    it('.should() - show 10 reviews count at start up', function() {
      cy.get('#book-reviews-column')
        .find('.card')
        .should('have.length', 10)
    })
  })

  describe('Filtering books works', function() {
    it('filter finds all matches', function() {
      cy.get('#filter-books-field')
        .type('clean')
        .should('have.value', 'clean')

      cy.get('#books-column')
        .find('.list-group-item')
        .should('have.length', 6)

      cy.get('html')
        .should('contain', 'Clean Code')
        .and('contain', 'Clean Architecture')

      cy.get('#filter-books-field')
        .clear()
        .should('not.have.value', 'clean')
    })

    it('filter eliminates non-matches', function() {
      cy.get('#filter-books-field')
        .type('field')

      cy.get('#books-column')
        .find('.list-group-item')
        .should('have.length', 1)

      cy.get('html')
        .should('not.contain', 'Clean')
        .and('not.contain', 'Code')
    })

    it('filter needs exact match', function() {
      cy.get('#filter-books-field')
        .type('claen')

      cy.get('#books-column')
        .find('.list-group-item')
        .should('have.length', 0)

      cy.get('#filter-books-field')
        .clear()

      cy.get('#books-column')
        .find('.list-group-item')
        .should('have.length.at.least', 10)

      cy.get('#filter-books-field')
        .type('cleana')

      cy.get('.list-group-item')
        .should('have.length', 0)
    })
  })
})