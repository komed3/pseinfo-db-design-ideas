import { Collection, Distinct, LangGroup } from './collection';

// Predefined form types
export type FormType =
    | 'allotrope'
    | 'phase'
    | 'polymorph'
    | 'morphology'
    | 'crystalSystem'
    | 'amorphous'
    | 'nanostructure'
    | 'other';

// Collection of element forms indexed by a unique key
export type FormCollection = Record< string, Collection< {
    type: Distinct< FormType >;
    formula: Distinct< string >;
    names?: LangGroup;
    note?: Distinct< string >;
} > >;

// Form IDs used in other parts of the data model
export type FormId = keyof FormCollection;
