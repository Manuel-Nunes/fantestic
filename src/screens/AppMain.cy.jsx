import React from 'react'
import AppMain from './AppMain'

describe('<AppMain />', () => {

  const guid = getGuid();

  beforeEach('renders', () => {
    cy.mount(<AppMain />)
    cy.get('#task-text').click().type(`${guid}`);
    cy.get('#add-task-btn').click();

    console.log("here");
  });

  it('adds a task', () => {
    cy.contains(`${guid}`);
  });

  it('completes a task', () => {
    cy.contains('div', `${guid}`).parent().children('#done-btn').click()
  });

  it('cancels a task', () => {
    
    // cy.contains(`${guid}`).get('#cancel-btn').click();
  });

  it('removes a task', () => {
    
  });
})

function getGuid() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
)}