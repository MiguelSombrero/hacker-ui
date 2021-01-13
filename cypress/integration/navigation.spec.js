
context('Navigation of the application', () => {
  describe('Navigation bar is redirecting correctly from home', function() {
    before(function() {
      cy.visit('http://localhost:3000')
    })

    it('.should() - navigate to books page', function() {
      cy.get('#navbar').contains('Kirjat').click()
      cy.location('pathname').should('include', 'books')
      cy.go('back')
      cy.location('pathname').should('not.include', 'book')
      cy.go('forward')
      cy.location('pathname').should('include', 'books')
    })

    it('.should() - navigate to courses page', function() {
      cy.get('#navbar').contains('Kurssit').click()
      cy.location('pathname').should('include', 'courses')
      cy.go('back')
      cy.location('pathname').should('not.include', 'courses')
      cy.go('forward')
      cy.location('pathname').should('include', 'courses')
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

  describe('Navigation bar is redirecting correctly from hackers page', function() {
    before(function() {
      cy.visit('http://localhost:3000/hackers')
    })

    it('.should() - navigate to home page', function() {
      cy.get('#navbar').contains('Koti').click()
      cy.location('pathname').should('not.include', 'hackers')
      cy.go('back')
      cy.location('pathname').should('include', 'hackers')
    })

    it('.should() - navigate to books page', function() {
      cy.get('#navbar').contains('Kirjat').click()
      cy.location('pathname').should('include', 'books')
      cy.go('back')
      cy.location('pathname').should('not.include', 'books')
      cy.go('forward')
      cy.location('pathname').should('include', 'books')
    })

    it('.should() - navigate to courses page', function() {
      cy.get('#navbar').contains('Kurssit').click()
      cy.location('pathname').should('include', 'courses')
      cy.go('back')
      cy.location('pathname').should('not.include', 'courses')
      cy.go('forward')
      cy.location('pathname').should('include', 'courses')
    })
  })

  describe('Navigation bar is redirecting correctly from books page', function() {
    before(function() {
      cy.visit('http://localhost:3000/books')
    })

    it('.should() - navigate to home page', function() {
      cy.get('#navbar').contains('Koti').click()
      cy.location('pathname').should('not.include', 'books')
      cy.go('back')
      cy.location('pathname').should('include', 'books')
    })

    it('.should() - navigate to courses page', function() {
      cy.get('#navbar').contains('Kurssit').click()
      cy.location('pathname').should('include', 'courses')
      cy.go('back')
      cy.location('pathname').should('not.include', 'courses')
      cy.go('forward')
      cy.location('pathname').should('include', 'courses')
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

  describe('Navigation bar is redirecting correctly from courses page', function() {
    before(function() {
      cy.visit('http://localhost:3000/courses')
    })

    it('.should() - navigate to home page', function() {
      cy.get('#navbar').contains('Koti').click()
      cy.location('pathname').should('not.include', 'courses')
      cy.go('back')
      cy.location('pathname').should('include', 'courses')
    })

    it('.should() - navigate to books page', function() {
      cy.get('#navbar').contains('Kirjat').click()
      cy.location('pathname').should('include', 'books')
      cy.go('back')
      cy.location('pathname').should('not.include', 'books')
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