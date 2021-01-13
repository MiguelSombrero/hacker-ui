
context('Contents of Front page', () => {
  before(function() {
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
      cy.contains('Hakkeri Portaali')
      cy.contains('Kuukauden arvostelut')
      cy.contains('Käydyimmät kurssit')
      cy.contains('Luetuimmat kirjat')
    })
  })

  describe('Front page is showing review counts correctly', function() {
    it('.should() - show reviews count at start up', function() {
      cy.get('#hack-o-meter')
        .find('.list-group-item')
        .should('have.length.at.least', 10)

      cy.get('html').should('contain', 'December 2020')
    })
  })

  describe('Front page is showing books correctly', function() {
    it('.should() - show list of books', function() {
      cy.get('#books-list')
        .find('.list-group-item')
        .should('have.length.at.least', 10)
    })

    it('.should() - have sorted books list by max reviews', function() {
      cy.get('#books-list')
        .find('.list-group-item')
        .eq(0)
        .should('contain', 'Arvosteluja 29')

      cy.get('#books-list')
        .find('.list-group-item')
        .eq(1)
        .should('contain', 'Arvosteluja 18')
    })
  })

  describe('Front page is showing courses correctly', function() {
    it('.should() - show list of courses', function() {
      cy.get('#courses-list')
        .find('.list-group-item')
        .should('have.length.at.least', 10)
    })

    it('.should() - have sorted courses list by max reviews', function() {
      cy.get('#courses-list')
        .find('.list-group-item')
        .eq(0)
        .should('contain', 'Arvosteluja 4')

      cy.get('#courses-list')
        .find('.list-group-item')
        .eq(3)
        .should('contain', 'Arvosteluja 3')
    })
  })
})