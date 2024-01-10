import { isNull } from "../../src/validators/common";

class MyClass {
    constructor() {};
}

describe('isNull', () => {
    
    const cases = [
        { input: null, expected: true },
        { input: undefined, expected: false },
        { input: [], expected: false },
        { input: [1,2,3,4,5], expected: false },
        { input: () => ({}), expected: false },
        { input: {}, expected: false },
        { input: Object.assign({ property: "value" }), expected: false },
        { input: new MyClass(), expected: false },
    ];

    test.each(cases)('isNull( $input ) should return $expected', ({ input, expected }) => {
        expect(isNull(input)).toBe(expected);
    })

})