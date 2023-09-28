/**
 * @typedef {object} ToDoData
 * @property {number} ID
 * @property {string} Description
 * @property {boolean} Done
 * @property {boolean} Canceled
 */

/**
 * @typedef {object} ToDoDisplayProps
 * @property {ToDoData[]} toDoList
 * @property {Function} setToDoItems
 */

/**
 * @typedef  { object } ToDoItemDisplayProp
 * @property { ToDoData } Data
 * @property { Function } RemoveItemClick
 * @property { Function } CanceledItemClick
 * @property { Function } DoneItemClick
 */

/**
 * @typedef {object} HeaderProps
 * @property {Function} addToDoItem
 */

/**
 * @typedef {object} FooterProps
 * @property {Function} saveList
 * @property {Function} loadList
 */
