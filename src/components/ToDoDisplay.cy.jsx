import React from 'react'
import ToDoDisplay from './ToDoDisplay'
import { ListItems } from '../mockData/ListItems'

describe('<ToDoDisplay />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ToDoDisplay toDoList={ListItems} />)
  });
})