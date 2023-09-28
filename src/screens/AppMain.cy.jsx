import React from 'react'
import AppMain from './AppMain'
import { ToDoItemDisplay } from '../components';



describe('<AppMain />', () => {

  const guid = getGuid();
  const checkedClassName = 'jjQaGy';
  const cancelledClassName = 'jjQaGy';

  beforeEach('renders', () => {
    cy.mount(<AppMain />)
    cy.get('#task-text').click().type(`${guid}`);
    cy.get('#add-task-btn').click();
  });

  it('adds a task', () => {
    cy.contains(`${guid}`);
  });

  it('completes a task', () => {
    cy.contains('div', `${guid}`).parent().children('#done-btn').click();
    cy.contains('div', `${guid}`).parent().children('#done-btn').should('have.class', checkedClassName);
  });

  it('cancels a task', () => {
    cy.contains('div', `${guid}`).parent().children('#cancel-btn').click()
    cy.contains('div', `${guid}`).parent().children('#cancel-btn').should('have.class', cancelledClassName);
  });

  it('removes a task', () => {
    cy.contains('div', `${guid}`).parent().children('#remove-btn').click()
    cy.contains(`${guid}`).should('not.exist');
  });
})

function getGuid() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
)}