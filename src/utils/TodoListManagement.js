/** @typedef {import('../types/types')} */


/**
 * @param {ToDoData} Item
 * @param {ToDoData[]} List
 * @returns {number} index of Item, -1 if not found;
 */
export function indexOfToDoItem(Item, List){
  for (let i = 0; i < List.length; i++){
    if (List[i].ID == Item.ID)
      return i;
  }
  return -1;
}

/**
 * Removes Item from ToDoList
 * @param {ToDoData} Item
 * @param {ToDoData[]} List
 */
export function removeItemFromDoToList(Item, List){
  const clone = [
    ...List
  ]

  const index = indexOfToDoItem(Item,clone);
  clone.splice(index,1)

  return clone;
}

/**
 * Toggle done states for certain Item
 * @param {ToDoData} Item
 * @param {ToDoData[]} List
 */
export function toggleDone(Item, List){
  const clone = [
    ...List
  ]

  const index = indexOfToDoItem(Item,clone);

  clone[index].Done =  !clone[index].Done;
  if (clone[index].Done)
    clone[index].Canceled =  !clone[index].Done;

  return clone;
}

/**
 * Toggle Canceled states for certain Item
 * @param {ToDoData} Item
 * @param {ToDoData[]} List
 */
export function toggleCanceled(Item, List){
  const clone = [
    ...List
  ]

  const index = indexOfToDoItem(Item,clone);

  clone[index].Canceled =  !clone[index].Canceled;
  if (clone[index].Canceled)
    clone[index].Done = !clone[index].Canceled;

  return clone;
}

/**
 * Adds an new Object
 * @param {string} text
 * @param {ToDoData[]} List
 */
export function appendToDo(text, List){
  const clone = [
    ...List
  ]

  clone.push({
    Canceled: false,
    Description: text,
    Done: false,
    ID: clone.length> 0? clone[clone.length-1].ID + 1: 1
  })

  return clone;
}

export default {
  indexOfToDoItem,
  removeItemFromDoToList,
  toggleCanceled,
  toggleDone,
  appendToDo
}
