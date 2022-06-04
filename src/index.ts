import {KeyboardInterface} from './interfaces/keyboard.interface';
import {keycodeSegments} from 'ts-keycode';
import {KeycodeEnum} from 'ts-keycode/lib/enums/index.enum';

export function keyboard (
    $event: KeyboardEvent,
    configuration: KeyboardInterface
): boolean {
    let notAllowed: boolean = true;
    if ($event?.metaKey || $event.ctrlKey) {
        notAllowed = !(configuration?.allow?.commands ?? true);
    } else {
        const key: number = $event?.which ?? $event?.keyCode;
        if (configuration?.allow) {
            Object.keys(configuration?.allow).forEach((keyName: string) => {
                const allow: any = configuration?.allow;
                if (allow?.[keyName]) {
                    if ((keycodeSegments as any)?.[keyName]?.hasOwnProperty(KeycodeEnum[key])) {
                        if ($event?.shiftKey || $event.getModifierState('CapsLock')) {
                            if (
                                (allow?.shift ?? true) ||
                                (allow?.[keyName]?.shift ?? true)
                            ) {
                                if (allow?.[keyName]?.shift ?? true) {
                                    notAllowed = false;
                                }
                            }
                        } else {
                            notAllowed = false;
                        }
                    }
                }
            });
        }
    }
    if (notAllowed) {
        $event.preventDefault();
        return false;
    }
    return true;
};
