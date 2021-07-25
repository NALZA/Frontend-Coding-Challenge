/// <reference types="cypress">
describe('renders app', () => {
	it('Renders correctly', () => {
		cy.visit('/');
		cy.contains('User Types');
	});
	it('Allows the user type selection to be used selecting Manager', () => {
		cy.visit('/');
		/* ==== Generated with Cypress Studio ==== */
		cy.get('[data-testid=manager]').check();
		/* ==== End Cypress Studio ==== */
		cy.contains('Manager Users');
	});
	it('Allows the user type selection to be used selecting Admin', () => {
		cy.visit('/');
		/* ==== Generated with Cypress Studio ==== */
		cy.get('[data-testid=admin]').check();
		/* ==== End Cypress Studio ==== */
		cy.contains('Admin Users');
	});
});
