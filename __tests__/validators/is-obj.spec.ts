import { isObject } from "../../src/validators/common";

class MyClass {
    constructor() {};
}

describe('isObject', () => {
    
    const cases = [
        { input: null, expected: false },
        { input: undefined, expected: false },
        { input: [], expected: false },
        { input: [1,2,3,4,5], expected: false },
        { input: () => ({}), expected: false },
        { input: {}, expected: true },
        { input: Object.assign({ property: "value" }), expected: true },
        { input: new MyClass(), expected: true },
    ];

    test.each(cases)('isObject( $input ) should return $expected', ({ input, expected }) => {
        expect(isObject(input)).toBe(expected);
    })

})