import { expect,test } from "@playwright/test"

test('Assert check',async({page})=>{

    let names = [1,2,3,4,5]

    expect(names,'given array is present in the original array').toEqual((expect.arrayContaining([1,5,3])))
     

})

