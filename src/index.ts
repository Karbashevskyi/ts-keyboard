import {KeyboardInterface} from './interfaces/keyboard.interface';
import {keycodeSegments} from 'ts-keycode';
import {KeycodeEnum} from 'ts-keycode/lib/enums/index.enum';

export function keyboard(
    $event: KeyboardEvent,
    configuration: KeyboardInterface
): boolean {
    const cancel: () => boolean = (): boolean => {
        $event.preventDefault();
        return false;
    };
    let notAllowed: boolean = true;
    if ($event?.metaKey || $event.ctrlKey) {
        notAllowed = !(configuration?.allow?.commands ?? true);
    } else {
        const key: number = $event?.which ?? $event?.keyCode;
        const allow: any = configuration?.allow;
        if (allow) {
            const target: HTMLInputElement = $event?.target as any;
            const max: number = allow?.max ?? target?.max ?? 0;
            if (max > 0) {
                if (max <= target.value?.length) {
                    return cancel();
                }
            }
            Object.keys(allow).forEach((keyName: string) => {
                if (allow[keyName]) {
                    if ((keycodeSegments as any)[keyName]?.hasOwnProperty(KeycodeEnum[key])) {
                        if ($event?.shiftKey || $event.getModifierState('CapsLock')) {
                            if (
                                (allow?.shift ?? true) ||
                                (allow[keyName]?.shift ?? true)
                            ) {
                                if (allow[keyName]?.shift ?? true) {
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
        return cancel();
    }
    return true;
};
