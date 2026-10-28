class DashboardPage {
  dashboardHeader = '.oxd-topbar-header-breadcrumb';
  userDropdown = '.oxd-userdropdown-tab';
  logoutLink = 'a[href="/web/index.php/auth/logout"]';

  verifyDashboard() {
    cy.get(this.dashboardHeader)
      .should('contain.text', 'Dashboard');
  }
  openPIM() {
    cy.get('.oxd-main-menu')
      .should('be.visible')
      .contains('PIM')
      .should('be.visible')
      .click();
  }
  logout() {
    cy.get('.oxd-userdropdown-tab').click();
    cy.contains('Logout').click();
  }
}
export default DashboardPage;