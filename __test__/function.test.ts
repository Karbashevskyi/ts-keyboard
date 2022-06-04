import {Asserts} from '../lib';


describe('Object', () => {

    const message: string = 'Type of argument is not correct.';
    const dataForBadTesting = [
        {
            value: BigInt(1)
        },
        {
            value: ""
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
        }
    ];

    it.each(dataForBadTesting)('Should false for $value', ({value}) => {
        try {
            Asserts.Function(value);
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError);
            expect(error).toHaveProperty('message', message);
        }
    });

    it('Should true for Symbol', () => {
        expect(Asserts.Function(Symbol)).toBeUndefined();
    });

    it('Should true for BigInt', () => {
        expect(Asserts.Function(BigInt)).toBeUndefined();
    });

    it('Should true for Function', () => {
        expect(Asserts.Function(Function)).toBeUndefined();
    });

    it('Should true for () => {}', () => {
        expect(Asserts.Function(() => {})).toBeUndefined();
    });

});
