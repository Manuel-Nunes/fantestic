import funcToTest from "../funcToTest";
import { describe, expect, it } from "vitest";

describe("Sum should work", ()=> {
  it( "5 + 5 = 10", ()=> {
    expect(funcToTest(5,5)).toBe(10)
  })
})