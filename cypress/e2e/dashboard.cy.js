describe('ec dashboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('render homepage text and the text below', () =>{
    cy.contains('All Election Dashboard').should('be.visible')
    cy.contains('Find different election dashboards below').should('be.visible')
  })
  
  it('render the homepage card', () =>{
    cy.get('a').contains('Score for each party')
    cy.get('a').contains('Most voted party in each section')
    cy.get('a').contains('Score for each candidate')
    cy.get('a').contains('Most voted candidate in each area')
    cy.get('a').contains('Number of people vote in all area')
  })

  it('display homepage with all link to dashboard', () => {
    cy.get('a[href="/charts/party"]').should('have.length', 1)
    cy.get('a[href="/charts/mostvoted/party"]').should('have.length', 1)
    cy.get('a[href="/charts/candidate"]').should('have.length', 1)
    cy.get('a[href="/charts/mostvoted/candidate"]').should('have.length', 1)
    cy.get('a[href="/charts/voteleft"]').should('have.length', 1)
  })

  it('all Header bar links are avaiable', () => {
    cy.contains('Home').click()
    cy.contains('All Election Dashboard').should('be.visible')
    cy.contains('Party').click()
    cy.contains('Dashboard for Party Election').should('be.visible')
    cy.contains('Candidate').click()
    cy.contains('Dashboard for MP Election').should('be.visible')
  })

  it('all card links are avaiable', () => {
    cy.contains('Score for each party').click()
    cy.contains('Score for each party').should('be.visible')
    cy.contains('Home').click()
    cy.contains('Most voted party in each section').click()
    cy.contains('Select each area to see each party score in the area').should('be.visible')
    cy.contains('Home').click()
    cy.contains('Most voted candidate in each area').click()
    cy.contains('Most voted candidate in each area').should('be.visible')
    cy.contains('Home').click()
    cy.contains('Most voted candidate in each area').click()
    cy.contains('Select each area to see each candidate score in the area').should('be.visible')
    cy.contains('Home').click()
    cy.contains('Number of people vote in all area').click()
    cy.contains('Number of people vote in all area').should('be.visible')
  })
})