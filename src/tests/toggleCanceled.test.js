import {
  toggleCanceled
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

describe("When given toggleCanceled (Positive Cases)", ()=> {
  it( "should return an array with the modified object", ()=> {
    const index = 5;
    const chosenItem = ListItems[index];
    const previousState = chosenItem.Canceled;
    expect(toggleCanceled(chosenItem,ListItems)[index].Canceled).toEqual(!previousState);
  });
});

describe("When given toggleCanceled (Negative Cases)", ()=> {

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it( "Should return a clone of the original array with no modifications if the items is not present", ()=> {

    const chosenItem = {
      Canceled    : false,
      Done        : false,
      Description : "Test Item",
      ID          : -1
    };
    expect(toggleCanceled(chosenItem,ListItems)).toStrictEqual(ListItems);
  });

  it("Should return a clone of the list parameter when item parameter is undefined", ()=>{
    const warningSpy = vi.spyOn(console,"warn");

    expect(toggleCanceled(undefined,ListItems)).toStrictEqual(ListItems);
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

    expect(toggleCanceled(chosenItem,undefined)).toStrictEqual([]);
    expect(warningSpy).toHaveBeenCalledOnce();
  });
});
