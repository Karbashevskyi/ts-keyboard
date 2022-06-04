import {BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';
import {keyboard} from '../lib';
import {KeyboardInterface} from '../src/interfaces/keyboard.interface';
import {keycode, keycodeSegments} from 'ts-keycode';

describe('input:number', () => {

    let input: HTMLInputElement;
    const keyboardEvent$: BehaviorSubject<KeyboardEvent | null> = new BehaviorSubject<KeyboardEvent | null>(null);

    beforeAll(() => {
        input = document.createElement('input');
        input.addEventListener('keydown', ($event) => {
            const config: KeyboardInterface = {
                allow: {
                    numbers: true
                }
            };
            if (keyboard($event, config)) {
                keyboardEvent$.next($event);
            } else {
                keyboardEvent$.next(null);
            }
        });
    });

    it.each(Object.keys(keycodeSegments.numbers).map((a: any) => [a, keycode[a]]))('Should true for %s / %s', (key: any, keyCode: any) => {
        input.dispatchEvent(new KeyboardEvent("keydown", {
            keyCode: keyCode,        // example values.
            which: keyCode,
            shiftKey: false,    // you don't need to include values
            ctrlKey: false,     // if you aren't going to use them.
            metaKey: false      // these are here for example's sake.
        }));
        expect(keyboardEvent$?.value instanceof KeyboardEvent).toBeTruthy();
    });

    it.each(Object.keys(keycodeSegments.alphabet).map((a: any) => [a, keycode[a]]))('Should false for %s / %s', (key: any, keyCode: any) => {
        input.dispatchEvent(new KeyboardEvent("keydown", {
            keyCode: keyCode,        // example values.
            which: keyCode,
            shiftKey: false,    // you don't need to include values
            ctrlKey: false,     // if you aren't going to use them.
            metaKey: false      // these are here for example's sake.
        }));
        expect(keyboardEvent$?.value  instanceof KeyboardEvent).toBeFalsy();
    });

    it.each(Object.keys(keycodeSegments.numpad).map((a: any) => [a, keycode[a]]))('Should false for %s / %s', (key: any, keyCode: any) => {
        input.dispatchEvent(new KeyboardEvent("keydown", {
            keyCode: keyCode,        // example values.
            which: keyCode,
            shiftKey: false,    // you don't need to include values
            ctrlKey: false,     // if you aren't going to use them.
            metaKey: false      // these are here for example's sake.
        }));
        expect(keyboardEvent$?.value  instanceof KeyboardEvent).toBeFalsy();
    });

});
