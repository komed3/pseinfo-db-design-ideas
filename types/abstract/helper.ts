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

// Goldschmidt classification types
export const Goldschmidt = [ 'atmophile', 'chalcophile', 'lithophile', 'siderophile', 'synthetic' ] as const;
export type Goldschmidt = ( typeof Goldschmidt )[ number ];

// Superconductivity types
export const Superconductivity = [ 'none', 'normal', 'special' ] as const;
export type Superconductivity = ( typeof Superconductivity )[ number ];
