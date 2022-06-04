import {Asserts} from '../lib';


describe('Null', () => {

    const message: string = 'Type of argument is not correct.';
    const dataForBadTesting = [
        {
            value: BigInt(1)
        },
        {
            value: ""
        },
        {
            value: ''
        },
        {
            value: ``
        },
        {
            value: {}
        },
        {
            value: []
        },
        {
            value: 0
        },
        {
            value: true
        },
        {
            value: false
        },
        {
            value: undefined
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
            Asserts.Null(value);
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError);
            expect(error).toHaveProperty('message', message);
        }
    });

    it('Should true for Symbol', () => {
        expect(Asserts.Null(null)).toBeUndefined();
    });

});
