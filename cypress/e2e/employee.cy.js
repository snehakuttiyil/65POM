import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import EmployeePage from '../pages/EmployeePage';

describe('OrangeHRM - Employee Tests', () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();
  const employeePage = new EmployeePage();

  
  beforeEach(() => {
    cy.visit('/web/index.php/auth/login');
    loginPage.login('Admin', 'admin123');
    dashboardPage.openPIM();
  });
  it('should add a new employee', () => {
    const firstName = 'John';
    const middleName = 'QA';
    const lastName = 'Tester';
    employeePage.addEmployee(
      firstName,
      middleName,
      lastName
    );
    employeePage.verifyEmployeeName(
      `${firstName} ${middleName} ${lastName}`
    );
  });
});
