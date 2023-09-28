import React from 'react'
import AppMain from './AppMain'
import { beforeEach } from 'mocha';

describe('<AppMain />', () => {
  before('renders', () => {
    cy.mount(<AppMain />)
  });

  it('adds a task', () => {
    
  });

  it('completes a task', () => {
    
  });

  it('cancels a task', () => {
    
  });

  it('removes a task', () => {
    
  });
})