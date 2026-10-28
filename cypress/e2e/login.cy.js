import LoginPage from '../pages/LoginPage';
describe('OrangeHRM - Login Tests', () => {
  const loginPage = new LoginPage();
  beforeEach(() => {
    cy.visit('/web/index.php/auth/login');
  });
  it('should login with valid credentials', () => {
    loginPage.login('Admin', 'admin123');
    cy.url().should('include', '/dashboard');
  });
  it('should show an error for invalid credentials', () => {
    loginPage.login('InvalidUser', 'WrongPassword123');
    cy.get('.oxd-alert-content-text')
      .should('be.visible');
  });
  it('should validate empty username and password', () => {
    loginPage.clickLogin();
    cy.get('.oxd-input-field-error-message')
      .should('be.visible');
  });
  it('should validate empty username', () => {
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();
    cy.get('.oxd-input-field-error-message')
      .should('be.visible');
  });
  it('should validate empty password', () => {
    loginPage.enterUsername('Admin');
    loginPage.clickLogin();
    cy.get('.oxd-input-field-error-message')
      .should('be.visible');
  });
});
