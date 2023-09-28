/** @typedef {import('../types/types')} */

/**
 * @param {ToDoData} Item
 * @param {ToDoData[]} List
 * @returns {number} index of Item, -1 if not found;
 */
export function indexOfToDoItem(Item, List){
  if (!Item || !List)
  {
    console.warn("indexOfToDoItem, was called with undefined parameters");
    return -1;
  }

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

  if (!List)
  {
    console.warn("removeItemFromDoToList was called with no List parameter");
    return [];
  }

  const clone = [
    ...List
  ];

  if (!Item)
  {
    console.warn("removeItemFromDoToList was called with no Item parameter");
    return clone;
  }

  const index = indexOfToDoItem(Item,clone);

  if (index >= 0)
    clone.splice(index,1);

  return clone;
}

/**
 * Toggle done states for certain Item
 * @param {ToDoData} Item
 * @param {ToDoData[]} List
 */
export function toggleDone(Item, List){
  if (!List){
    console.warn("toggleDone was called with no List parameter");
    return [];
  }

  const clone = [
    ...List
  ];

  if (!Item){
    console.warn("toggleDone was called with no Item parameter");
    return clone;
  }

  const index = indexOfToDoItem(Item,clone);

  if (index < 0)
    return clone;

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
  if (!List){
    console.warn("toggleCanceled was called with no List parameter");
    return [];
  }

  const clone = [
    ...List
  ];

  if (!Item){
    console.warn("toggleCanceled was called with no Item parameter");
    return clone;
  }

  const index = indexOfToDoItem(Item,clone);

  if (index < 0)
    return clone;

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
  if (!List)
  {
    console.warn("appendToDo was called with no List parameter");
    List = [];
  }
  const clone = [
    ...List
  ];

  if (!text){

    console.warn("appendToDo was called with an undefined text");

    return clone;
  }

  clone.push({
    Canceled: false,
    Description: text,
    Done: false,
    ID: clone.length> 0? clone[clone.length-1].ID + 1: 1
  });

  return clone;
}

export default {
  indexOfToDoItem,
  removeItemFromDoToList,
  toggleCanceled,
  toggleDone,
  appendToDo
};
