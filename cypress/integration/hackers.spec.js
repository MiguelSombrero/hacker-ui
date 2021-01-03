
context('Contents of Hackers page', () => {
    beforeEach(function() {
      cy.visit('http://localhost:3000/hackers')
    })
         
    describe('Hackers page is showing static contents', function() {
      it('.should() - make an assertion about front navbar', function() {
        cy.contains('Koti')
        cy.contains('Kirjat')
        cy.contains('Hakkerit')
      })

      it('.should() - make an assertion about titles', function() {
        cy.contains('Rakenna tiimi')
        cy.contains('Hakutulokset')
        cy.contains('Tiimissä')
        cy.contains('Tiimin osaaminen')
      })
    })
  
    describe('Hackers page is showing hackers correctly', function() {
      it('.should() - show more than 5 hackers at start up', function() {
        cy.get('.card')
          .should('have.length.at.least', 5)
      })
    })
  
    describe('Filtering hackers works', function() {
      it('filter finds all matches', function() {
        cy.get('#filter-hackers-field')
          .type('java')
          .should('have.value', 'java')
  
        cy.get('.card')
          .should('have.length', 3)
        
        cy.get('html')
          .should('contain', 'Java 2.6 vuotta')
          .and('contain', 'Java 1.1 vuotta')
          .and('contain', 'Java 0.8 vuotta')
  
        cy.get('#filter-hackers-field')
          .clear()
          .should('not.have.value', 'java')
      })
  
      it('filter eliminates non-matches', function() {
        cy.contains('Kari Somero')
  
        cy.get('#filter-hackers-field')
          .type('python')
  
        cy.get('.card')
          .should('have.length', 1)
        
        cy.get('html')
          .should('not.contain', 'Kari Somero')
          .and('not.contain', 'Liisa Ahtinen')
      })
  
      it('filter needs exact match', function() {
        cy.get('#filter-hackers-field')
          .type('java, mule, xml')
    
        cy.get('.card')
          .should('have.length', 1)
        
        cy.get('html')
          .should('contain', 'Jukka Jukkanen')
          .and('contain', 'Xml')
          .and('contain', 'Java')
          .and('contain', 'Mule')

        cy.get('#filter-hackers-field')
          .clear()
  
        cy.get('.card')
          .should('have.length.at.least', 5)
  
        cy.get('#filter-hackers-field')
          .type('java, mulle, xml')
    
        cy.get('.card')
          .should('have.length', 0)
      })
    })
  })