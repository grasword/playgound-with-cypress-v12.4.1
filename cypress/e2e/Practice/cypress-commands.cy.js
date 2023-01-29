describe('Custom Cypress Commands', () => {
  it('uses cy.getAllPosts() to retrieve all posts from the /api/posts endpoint', () => {
    // Create a custom Cypress Command called 'getAllPosts' which uses
    // cy.request() to get all of the posts from the /api/posts endpoint
    // Then use this custom command in this test to assert that the length of the posts
    // returned is equal to 2
    const expectedLength = 2

    cy.getAllPosts().then((posts) => {
      expect(posts).to.have.length(expectedLength)
    })
  })

  it('uses cy.getFirstPost() to retrieve the first post from the /api/posts endpoint', () => {
    // Create a custom Cypress Command called 'getFirstPost' which uses
    // cy.request() to get the first post from the /api/posts endpoint
    // Then use this custom command in this test to assert that the id of the first post
    // is equal to 'pre-rendering'
    const expectedId = 'pre-rendering'

    cy.getFirstPost().then((post) => {
      expect(post.id).to.eq(expectedId)
    })
  })
})
