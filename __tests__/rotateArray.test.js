const rotateArray = require("../katas/rotateArray");

describe("rotateArray",()=>{
    test("returns an array",()=>{
        expect (Array.isArray(rotateArray())).toBe(true)
    });
    test("when second argument is zero, input array is returned unchanged",()=>{
        const testArray = [1,2,3];
        expect(rotateArray(testArray,0)).toEqual(testArray);
    });
    test("if the number is positive, move array x to the right",()=>{
        const  testArray = [1,2,3];
        expect(rotateArray(testArray,1)).toEqual([3,1,2]);
    });
    test("works with numbers greater than the length of the array",()=>{
        const  testArray = [1,2,3];
        expect(rotateArray(testArray,4)).toEqual([3,1,2]);
    });
    test("if the number is negative, move array x to the left",()=>{
        const  testArray = [1,2,3];
        expect(rotateArray(testArray,-1)).toEqual([2,3,1]);
    });
    test("works with numbers greater than the length of the array",()=>{
        const  testArray = [1,2,3];
        expect(rotateArray(testArray,-4)).toEqual([2,3,1]);
    });
    test("works with more complicated examples",()=>{
        const  testArray = [1,2,3,4,5,6,7];
        expect(rotateArray(testArray,-4)).toEqual([5,6,7,1,2,3,4]);
    });
})