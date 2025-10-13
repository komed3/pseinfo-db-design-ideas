/**
 * Element Classification Property Types
 */

import { Distinct, MapPropertyDefinition } from '../property';

// Classification property names
export type ClassificationProperty =
    'symbol' | 'atomicNumber' | 'block' | 'column' | 'group' | 'period' | 'set' | 'phase' |
    'naturalOccurrence' | 'goldschmidt' | 'superconductivity' | 'radioactive';

// Collection of classification properties
export type ClassificationCollection = MapPropertyDefinition< {
    symbol: Distinct< string >;
    atomicNumber: Distinct< number >;
    block: Distinct< 's' | 'p' | 'd' | 'f' >;
    column: Distinct< number >;
    group: Distinct< number >;
    period: Distinct< number >;
    set: Distinct<
        'nonMetal' | 'nobleGas' | 'alkaliMetal' | 'alkalineEarthMetal' | 'metalloid' | 'halogen' |
        'metal' | 'transitionMetal' | 'lanthanoide' | 'actinoide' | undefined
    >;
    phase: Distinct< 'solid' | 'gas' | 'liquid' | undefined >;
    naturalOccurrence: Distinct< 'primordial' | 'decayProduct' | 'synthetic' >;
    goldschmidt: Distinct< 'atmophile' | 'chalcophile' | 'lithophile' | 'siderophile' | 'synthetic' >;
    superconductivity: Distinct< 'none' | 'normal' | 'special' | undefined >;
    radioactive: Distinct< boolean >;
} >;
