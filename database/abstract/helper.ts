import { Distinct, Group } from './collection';
import { RangeValue, SingleValue } from './value';

// Phase of matter
export const Phase = [ 'solid', 'gaseous', 'liquid' ] as const;
export type Phase = ( typeof Phase )[ number ];

// Element blocks
export const ElementBlock = [ 's', 'p', 'd', 'f' ] as const;
export type ElementBlock = ( typeof ElementBlock )[ number ];

// Element blocks
export const ShellModel = [ 'k', 'l', 'm', 'n', 'o', 'p', 'q' ] as const;
export type ShellModel = ( typeof ShellModel )[ number ];

// Element sets/groups
export const ElementSet = [
    'nonMetal', 'nobleGas', 'alkaliMetal', 'alkalineEarthMetal', 'metalloid', 'halogen',
    'metal', 'transitionMetal', 'lanthanoide', 'actinoide'
] as const;

export type ElementSet = ( typeof ElementSet )[ number ];

// Element properties
export const ElementProperty = [
    'antiquity', 'artificial', 'heavyMetal', 'lightMetal', 'mononuclide', 'native',
    'natural', 'noble', 'platinumMetal', 'radioactive', 'rareEarths', 'refractorMetal',
    'semiconductor', 'stable', 'synthetic', 'vital'
] as const;

export type ElementProperty = ( typeof ElementProperty )[ number ];

// Natural occurrence types
export const NaturalOccurrence = [ 'primordial', 'decayProduct', 'synthetic' ] as const;
export type NaturalOccurrence = ( typeof NaturalOccurrence )[ number ];

// Superconductivity types
export const Superconductivity = [ 'none', 'normal', 'special' ] as const;
export type Superconductivity = ( typeof Superconductivity )[ number ];

// Goldschmidt classification types
export const Goldschmidt = [
    'atmophile', 'chalcophile', 'lithophile', 'siderophile', 'synthetic'
] as const;

export type Goldschmidt = ( typeof Goldschmidt )[ number ];

// Crystal structure types
export const CrystalStructure = [
    'hex', 'hcp', 'bcc', 'rho', 'sc', 'fcc', 'dc',
    'orth', 'tetr', 'dhcp', 'mon'
] as const;

export type CrystalStructure = ( typeof CrystalStructure )[ number ];

// Meta data / schema version
export type MetaData = {
    _metadata: {
        lastModified: string;
        schemaVersion: 1;
    };
};

// Classification information
export type Registry = Group< {
    cas: Distinct< string >;
    cid: Distinct< string >;
    echa?: Distinct< string >;
    eg?: Distinct< string >;
    wikidata?: Distinct< `Q${ string }` >;
    rtecs?: Distinct< `RTECS${ string }` >;
} >;

// Chemical identifiers
export type Identifier = Group< {
    inChI: Distinct< `InChI=${ string }` >;
    inChIkey: Distinct< `InChIKey=${ string }` >;
    smiles?: Distinct< string >;
} >;

// Crystal structure information
export type CrystalSystem = Group< {
    crystalStructure?: Distinct< CrystalStructure >;
    pearsonSymbol?: Distinct< string >;
    spaceGroup?: Distinct< string >;
    spaceGroupNumber?: Distinct< number >;
    latticeConstant?: Group< {
        a?: Distinct< number >;
        b?: Distinct< number >;
        c?: Distinct< number >;
        alpha?: Distinct< number >;
        beta?: Distinct< number >;
        gamma?: Distinct< number >;
    } >;
} >;

// Toxicity information
export type Toxicity = Distinct< {
    _type: 'EC50' | 'LC50' | 'LD50' | 'TD50' | 'LOAEL' | 'LOEL' | 'NOAEL' | 'NOEL';
    organism: string;
    value: SingleValue< 'massFraction' > | RangeValue< 'massFraction' >;
    application?: 'oral' | 'dermal' | 'inhalation' | 'intravenous' | 'intraperitoneal' | 'subcutaneous';
    duration?: string;
}[] >;
