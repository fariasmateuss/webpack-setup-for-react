/// <reference types="cypress" />

describe(`Home page`, () => {
  beforeEach(() => {
    cy.visit(`/`);
  });

  it(`should render the main page and show content`, () => {
    cy.contains(`h1`, `Welcome to React.js`);
    cy.contains(`p`, `Get started by editing src/App.tsx`);
  });
});
