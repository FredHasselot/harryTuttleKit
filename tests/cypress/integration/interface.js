describe('sign-up', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should contains a clickable button named "Home"', () => {
      cy.contains('Home').click();
    });

    it('clicking "About" button should navigate to a new url', () => {
      cy.contains('About').click();
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/about');
    });

    it('should find button by className', () => {
      cy.get('.custom-nav-item');
    });
    //
});
