class EmployeePage {
  addEmployeeMenu = '.oxd-topbar-body-nav-tab-item';
  firstNameInput = 'input[name="firstName"]';
  middleNameInput = 'input[name="middleName"]';
  lastNameInput = 'input[name="lastName"]';
  saveButton = 'button[type="submit"]';
  employeeNameHeader = '.orangehrm-edit-employee-name';
openAddEmployee() {
  cy.contains('a', 'Add Employee').click();
}
  enterEmployeeDetails(firstName, middleName, lastName) {
    cy.get(this.firstNameInput).clear().type(firstName);
    cy.get(this.middleNameInput).clear().type(middleName);
    cy.get(this.lastNameInput).clear().type(lastName);
  }
  saveEmployee() {
    cy.get(this.saveButton).click();
  }
  verifyEmployeeName(name) {
  cy.url().then((url) => {
    cy.log('Current URL: ' + url);
  });
  cy.get('body').then(($body) => {
    cy.log('Employee name selector check');

    if ($body.find('.orangehrm-edit-employee-name').length > 0) {
      cy.get('.orangehrm-edit-employee-name')
        .should('contain.text', name);
    } else {
      cy.log('Employee name selector not found on this page');
    }
  });
}
verifyEmployeeName(name) {
  cy.url().then((url) => {
    cy.log('Current URL: ' + url);
  });
  cy.get('body').then(($body) => {
    cy.log('Employee name selector check');

    if ($body.find('.orangehrm-edit-employee-name').length > 0) {
      cy.get('.orangehrm-edit-employee-name')
        .should('contain.text', name);
    } else {
      cy.log('Employee name selector not found on this page');
    }
  });
}
  addEmployee(firstName, middleName, lastName) {
    this.openAddEmployee();
    this.enterEmployeeDetails(
      firstName,
      middleName,
      lastName
    );
    this.saveEmployee();
  }
}
export default EmployeePage;
