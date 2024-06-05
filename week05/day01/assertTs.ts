import { expect } from "@playwright/test"

let names = [1,2,3,4,5]

expect(names,'It is equal').toEqual((expect.arrayContaining([1,5])))