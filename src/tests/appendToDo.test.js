import {
  appendToDo
} from '../utils';

import {
  ListItems
} from '../mockData/ListItems';

import {
  describe,
  expect,
  it,
  vi,
  afterEach,
} from 'vitest';

describe('When given appendToDo (Positive Cases)', ()=> {
  it( 'should return an array with the modified object', ()=> {
    const text = 'TestItem';
    const returned =appendToDo(text,ListItems);
    expect(returned.length).toEqual(ListItems.length+1);
    expect(returned[returned.length-1].Description).toEqual(text);
  });

  it('should return an array with one item if the provided array is empty', ()=>{

    const text = 'TestItem';
    const returned =appendToDo(text,[]);
    expect(returned.length).toEqual(1);
  });

  it ('should append an item with the new highest ID', ()=> {

    const highID = ListItems[ListItems.length-1].ID;
    const text = 'TestItem';
    const returned = appendToDo(text,ListItems);
    expect(returned[returned.length - 1 ].ID).toEqual(highID +1 );
  });
});

describe('When given appendToDo (Negative Cases)', ()=> {

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return a clone of the original array when text is undefined', ()=>{

    const warningSpy = vi.spyOn(console,'warn');

    const returned = appendToDo(undefined,ListItems);
    expect(returned).toStrictEqual(ListItems);

    expect(warningSpy).toHaveBeenCalledOnce();
  });

  it('should return an array with one item if the original array was undefined', ()=>{

    const warningSpy = vi.spyOn(console,'warn');

    const myText = 'TestText';

    const returned = appendToDo(myText,undefined);
    const lastItem = returned[returned.length - 1];

    expect(returned.length).toBe(1);
    expect(lastItem.Description).toEqual(myText);
    expect(lastItem.ID).toBe(1);
    expect(warningSpy).toHaveBeenCalledOnce();
  });
});
