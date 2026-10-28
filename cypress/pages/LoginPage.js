class LoginPage {
  usernameInput = 'input[name="username"]';
  passwordInput = 'input[name="password"]';
  loginButton = 'button[type="submit"]';

  enterUsername(username) {
    cy.get(this.usernameInput).clear().type(username);
  }

  enterPassword(password) {
    cy.get(this.passwordInput).clear().type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
}

export default LoginPage;
