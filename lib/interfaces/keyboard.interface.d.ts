import { KeyboardSectionType } from '../types/keyboard.section.type';
export interface KeyboardInterface {
    allow?: {
        shift?: boolean;
        max?: number;
        accents?: KeyboardSectionType;
        alphabet?: KeyboardSectionType;
        commands?: KeyboardSectionType;
        f?: KeyboardSectionType;
        functions?: KeyboardSectionType;
        numbers?: KeyboardSectionType;
        numpad?: KeyboardSectionType;
        select?: KeyboardSectionType;
    };
}
