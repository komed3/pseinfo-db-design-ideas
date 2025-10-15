import { Distinct, Group } from './collection';

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

// Registry identifiers for substances
export type RegistryGroup = Group< {
    cas: Distinct< string >;
    inChI: Distinct< string >;
    inChIkey: Distinct< string >;
    cid: Distinct< string >;
    echa?: Distinct< string >;
    eg?: Distinct< string >;
    wikidata?: Distinct< string >;
    rtecs?: Distinct< string >;
} >;

// Crystal structure information
export type CrystalGroup = Group< {
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
