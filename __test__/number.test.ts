import {Asserts} from '../lib';


describe('Number', () => {
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
            value: true
        },
        {
            value: false
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
            Asserts.Number(value);
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError);
            expect(error).toHaveProperty('message', message);
        }
    });

    it('Should true for 0', () => {
        expect(Asserts.Number(0)).toBeUndefined();
    });

});
