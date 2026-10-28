import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
describe('OrangeHRM - Dashboard Tests', () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();
  beforeEach(() => {
    cy.visit('/web/index.php/auth/login');
    loginPage.login('Admin', 'admin123');
  });
  it('should display the dashboard', () => {
    dashboardPage.verifyDashboard();
    cy.url().should('include', '/dashboard');
  });
  it('should navigate to PIM', () => {
    dashboardPage.openPIM();
    cy.url().should('include', '/pim/viewEmployeeList');
  });
  it('should logout successfully', () => {
    dashboardPage.logout();
    cy.url().should('include', '/auth/login');
  });
});

