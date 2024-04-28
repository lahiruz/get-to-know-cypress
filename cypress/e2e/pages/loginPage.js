class LoginPage {
  // Locators
  usernameField =
    ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
  passwordField =
    ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
  loginButton = '.oxd-button';


  // error
  errorContainer = '.oxd-alert';
  errorElement = '.oxd-alert-content-text';

  // Actions
  visit() {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
  }

  setUsername(username) {
    cy.get(this.usernameField).type(username);
  }

  setPassword(password) {
    cy.get(this.passwordField).type(password);
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  // Combined action for logging in
  login(username, password) {
    this.setUsername(username);
    this.setPassword(password);
    this.clickLoginButton();
  }

  verifyLoginPage() {
    cy.location('pathname').should('eq', '/web/index.php/auth/login');
  }

  showLoginError(error) {
    cy.get(this.errorContainer)
      .find(this.errorElement)
      .should('contain', error);
  }
}

export default new LoginPage();
