class HomePage {
  // Locators
  userMenu = '.oxd-userdropdown-tab';

  // Actions
  verifyHomePage() {
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get(this.userMenu).should('exist');
  }
}

export default new HomePage();
