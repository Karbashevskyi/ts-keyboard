import {Asserts} from '../lib';


describe('Not.NullOrUndefined', () => {
    const message: string = 'Type of argument is not correct.';
    const dataForBadTesting = [
        {
            value: null
        },
        {
            value: undefined
        }
    ];

    it.each(dataForBadTesting)('Should false for $value', ({value}) => {
        try {
            Asserts.Not.NullOrUndefined(value)
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError);
            expect(error).toHaveProperty('message', message);
        }
    });

    const dataForGoodTesting = [
        {
            value: BigInt(1)
        },
        {
            value: Symbol
        },
        {
            value: {}
        },
        {
            value: ""
        },
        {
            value: []
        },
        {
            value: true
        },
        {
            value: false
        },
        {
            value: ''
        },
        {
            value: ``
        },
        {
            value: Function
        },
        {
            value: () => {}
        }
    ];

    it.each(dataForGoodTesting)('Should true for $value', ({value}) => {
        expect(Asserts.Not.NullOrUndefined(value)).toBeUndefined();
    });

});
