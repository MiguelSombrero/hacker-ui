
context('Contents of Hackers page', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000/hackers')
    cy.wait(2000)
  })

  describe('Hackers page is showing static contents', function() {
    it('.should() - make an assertion about front navbar', function() {
      cy.contains('Koti')
      cy.contains('Kirjat')
      cy.contains('Kurssit')
      cy.contains('Hakkerit')
      cy.contains('Etsi osaajia')
    })

    it('.should() - make an assertion about titles', function() {
      cy.contains('Tiimissä 0 hakkeria')
      cy.contains('Tiimin osaaminen')
    })
  })

  describe('Hackers page is showing hackers correctly', function() {
    it('.should() - show more than 30 hackers at start up', function() {
      cy.get('.card')
        .should('have.length.at.least', 30)
    })
  })

  describe('Filtering hackers works', function() {
    it('filter finds all matches', function() {
      cy.get('#filter-hackers-field')
        .type('python')
        .should('have.value', 'python')

      cy.get('.card')
        .should('have.length', 4)

      cy.get('.card').eq(0)
        .should('contain', '8.2 vuotta')
        
      cy.get('.card').eq(1)
        .should('contain', '4.8 vuotta')

      cy.get('#filter-hackers-field')
        .clear()
        .should('not.have.value', 'java')
    })

    it('filter eliminates non-matches', function() {
      cy.contains('Miika Somero')

      cy.get('#filter-hackers-field')
        .type('python')

      cy.get('html')
        .should('not.contain', 'Miika Somero')
        .and('contain', 'Tuomas Pesola')
    })

    it('filter needs exact match', function() {
      cy.get('#filter-hackers-field')
        .type('java, mule, xml')

      cy.get('.card')
        .should('have.length', 2)

      cy.get('html')
        .should('contain', 'Miika Somero')
        .and('contain', 'Xml')
        .and('contain', 'Java')
        .and('contain', 'Mule')

      cy.get('#filter-hackers-field')
        .clear()

      cy.get('.card')
        .should('have.length.at.least', 30)

      cy.get('#filter-hackers-field')
        .type('java, mulle, xml')

      cy.get('.card')
        .should('have.length', 0)
    })
  })

  describe('Adding hackers to team', function() {
    it('.should() - not contain any hackers in team at start', function() {
      cy.contains('Ei näy kettään')
      cy.contains('Ei ossaa mittään')
    })

    it('.should() - add hacker to team when pressed add button', function() {
      cy.get('.card').first().find('button').first().click()

      cy.get('html').should('not.contain', 'Ei näy kettään')
      cy.get('html').should('not.contain', 'Ei ossaa mittään')
      cy.get('#knowhow-list').should('contain', 'Maven 31 vuotta')
      cy.get('#team-list').should('contain', 'Timo Sorsamaki')
    })

    it('.should() - add two hackers to team when pressed add button', function() {
      cy.get('.card').eq(0).find('button').first().click()
      cy.get('.card').eq(1).find('button').first().click()

      cy.get('html').should('not.contain', 'Ei näy kettään')
      cy.get('html').should('not.contain', 'Ei ossaa mittään')
      cy.get('#knowhow-list').should('contain', 'Maven 31 vuotta')
      cy.get('#team-list').should('contain', 'Timo Sorsamaki')
      cy.get('#knowhow-list').should('contain', 'Sql 20 vuotta')
      cy.get('#team-list').should('contain', 'Heikki Uusitalo')
    })
  })
})