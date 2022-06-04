import {Asserts} from '../lib';


describe('Boolean', () => {
    const message: string = 'Type of argument is not correct.';
    const dataForBadTesting = [
        {
            value: BigInt(1)
        },
        {
            value: Symbol
        },
        {
            value: ""
        },
        {
            value: {}
        },
        {
            value: []
        },
        {
            value: null
        },
        {
            value: undefined
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

    it.each(dataForBadTesting)('Should false for $value', ({value}) => {
        try {
            Asserts.Boolean(value);
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError);
            expect(error).toHaveProperty('message', message);
        }
    });

    it('Should true for true', () => {
        expect(Asserts.Boolean(true)).toBeUndefined();
    });

    it('Should true for false', () => {
        expect(Asserts.Boolean(false)).toBeUndefined();
    });

});
