const loginPage = require('../pages/LoginPage');
const homePage = require('../pages/homePage');

describe('Login Functionality', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    loginPage.login('Admin', 'admin123');
    homePage.verifyHomePage();
  });

  it('should display error message for invalid credentials', () => {
    loginPage.login('invalidusername', 'invalidpassword');
    loginPage.verifyLoginPage()
    loginPage.showLoginError('Invalid credentials')
  });
});
