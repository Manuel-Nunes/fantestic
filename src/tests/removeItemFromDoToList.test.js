import {
  removeItemFromDoToList
} from "../utils";

import {
  ListItems
} from "../mockData/ListItems";

import {
  describe,
  expect,
  it,
  vi,
  afterEach,
} from "vitest";

describe("When given removeItemFromDoToList (Positive Cases)", ()=> {
  it( "should return an array of length n-1 when given a valid item", ()=> {
    const chosenItem = ListItems[5];
    expect(removeItemFromDoToList(chosenItem,ListItems).length).toBe(ListItems.length-1);
  });

  it( "should return an array of length 0 when given an array of 1 items", ()=> {
    const chosenItem = ListItems[5];
    const myArr = [chosenItem];
    expect(removeItemFromDoToList(chosenItem,myArr).length).toBe(0);
  });
});

describe("When given removeItemFromDoToList (Negative Cases)", ()=> {

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it( "should return An array with the length of N when given item which does not exists", ()=> {

    const chosenItem = {
      Canceled    : false,
      Done        : false,
      Description : "Test Item",
      ID          : -1
    };
    expect(removeItemFromDoToList(chosenItem,ListItems).length).toBe(ListItems.length);
  });

  it("Should return a clone of the list parameter when item parameter is undefined", ()=>{
    const warningSpy = vi.spyOn(console,"warn");

    expect(removeItemFromDoToList(undefined,ListItems)).toStrictEqual(ListItems);
    expect(warningSpy).toHaveBeenCalledOnce();
  });

  it("Should return an empty array when List parameter is undefined", ()=>{
    const warningSpy = vi.spyOn(console,"warn");

    const chosenItem = {
      Canceled    : false,
      Done        : false,
      Description : "Test Item",
      ID          : -1
    };

    expect(removeItemFromDoToList(chosenItem,undefined)).toStrictEqual([]);
    expect(warningSpy).toHaveBeenCalledOnce();
  });
});
