describe('ec dashboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('render homepage text', () =>{
    cy.contains('All Election Dashboard').should('be.visible')
  })
  
  it('display home page with all link to dashboard', () => {
    cy.get('a[href="/charts/party"]').should('have.length', 1)
    cy.get('a[href="/charts/mostvoted/party"]').should('have.length', 1)
    cy.get('a[href="/charts/candidate"]').should('have.length', 1)
    cy.get('a[href="/charts/mostvoted/candidate"]').should('have.length', 1)
    cy.get('a[href="/charts/voteleft"]').should('have.length', 1)
  })
})