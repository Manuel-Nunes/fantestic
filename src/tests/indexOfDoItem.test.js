import {
  indexOfToDoItem
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

describe("When given indexOfToDoItem (Positive Cases)", ()=> {
  it( "should return 5 when given item with value 5", ()=> {

    const chosenItem = ListItems[5];
    expect(indexOfToDoItem(chosenItem,ListItems)).toBe(5);
  });
});

describe("When given indexOfToDoItem (Negative Cases)", ()=> {

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it( "should return -1 when given item which does not exists", ()=> {

    const chosenItem = {
      Canceled    : false,
      Done        : false,
      Description : "Test Item",
      ID          : -1
    };
    expect(indexOfToDoItem(chosenItem,ListItems)).toBe(-1);
  });

  it("Should return -1 when item parameter is undefined", ()=>{
    const warningSpy = vi.spyOn(console,"warn");

    expect(indexOfToDoItem(undefined,ListItems)).toBe(-1);
    expect(warningSpy).toHaveBeenCalledOnce();
  });

  it("Should return -1 when List parameter is undefined", ()=>{
    const warningSpy = vi.spyOn(console,"warn");

    const chosenItem = {
      Canceled    : false,
      Done        : false,
      Description : "Test Item",
      ID          : -1
    };

    expect(indexOfToDoItem(chosenItem,undefined)).toBe(-1);
    expect(warningSpy).toHaveBeenCalledOnce();
  });
});
