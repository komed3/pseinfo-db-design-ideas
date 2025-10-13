/**
 * Form Collection
 */

import { Distinct, Group, LangGroup, MapPropertyDefinition } from './property';

export type FormType =
    'allotrope' | 'phase' | 'polymorph' | 'morphology' | 'crystalSystem' | 'amorphous' |
    'nanostructure' | 'other';

// Form IDs used in other parts of the data model
export type FormId = string;

// Collection of element forms indexed by a unique key
export type FormCollection = Record< FormId, MapPropertyDefinition< {
    type: Distinct< FormType >;
    formula: Distinct< string >;
    names?: LangGroup;
    crystalSystem?: Group< {
        crystalStructure?: Distinct<
            'hex' | 'hcp' | 'bcc' | 'rho' | 'sc' | 'fcc' | 'dc' | 'orth' |
            'tetr' | 'dhcp' | 'mon'
        >;
        pearsonSymbol?: Distinct< string >;
        spaceGroup?: Distinct< string >;
        spaceGroupNumber?: Distinct< number >;
        latticeConstant?: {
            a?: number;
            b?: number;
            c?: number;
            alpha?: number;
            beta?: number;
            gamma?: number;
        };
    } >;
    note?: Distinct< string >;
} > >;
