// Phase of matter
export const Phase = [ 'solid', 'gaseous', 'liquid' ] as const;
export type Phase = ( typeof Phase )[ number ];

// Common element sets/groups
export const ElementSet = [
    'nonMetal', 'nobleGas', 'alkaliMetal', 'alkalineEarthMetal', 'metalloid', 'halogen',
    'metal', 'transitionMetal', 'lanthanoide', 'actinoide'
] as const;

export type ElementSet = ( typeof ElementSet )[ number ];

// Natural occurrence types
export const NaturalOccurrence = [ 'primordial', 'decayProduct', 'synthetic' ] as const;
export type NaturalOccurrence = ( typeof NaturalOccurrence )[ number ];

// Goldschmidt classification types
export const Goldschmidt = [ 'atmophile', 'chalcophile', 'lithophile', 'siderophile', 'synthetic' ] as const;
export type Goldschmidt = ( typeof Goldschmidt )[ number ];

// Superconductivity types
export const Superconductivity = [ 'none', 'normal', 'special' ] as const;
export type Superconductivity = ( typeof Superconductivity )[ number ];
