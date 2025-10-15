import { Collection, Distinct } from './collection';

// List of all form types for substances
export const FormType = [
    'allotrope', 'phase', 'molecular', 'polymorph', 'morphology',
    'crystalSystem', 'amorphous', 'nanostructure', 'other'
] as const;

// Type representing any valid form type
export type FormType = ( typeof FormType )[ number ];

// Form IDs used in other parts of the data model
export type FormId = string;

// Collection of forms for substances
export type FormCollection< T > = Record< FormId, Collection< {
    type: Distinct< FormType >;
    formula: Distinct< string >;
    note?: Distinct< string >;
    properties?: Collection< T >;
} > >;
