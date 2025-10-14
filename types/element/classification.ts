// not yet implemented

import { Collection, Distinct } from '../abstract/collection';

export type ClassificationCollection = Collection< {
    symbol: Distinct< string >;
    atomicNumber: Distinct< number >;
    block: Distinct< 's' | 'p' | 'd' | 'f' >;
    column: Distinct< number >;
    group: Distinct< number >;
    period: Distinct< number >;
    radioactive: Distinct< boolean >;
    set?: Distinct<
        'nonMetal' | 'nobleGas' | 'alkaliMetal' | 'alkalineEarthMetal' | 'metalloid' |
        'halogen' | 'metal' | 'transitionMetal' | 'lanthanoide' | 'actinoide'
    >;
    phase?: Distinct< 'solid' | 'gas' | 'liquid' >;
    naturalOccurrence?: Distinct< 'primordial' | 'decayProduct' | 'synthetic' >;
    goldschmidt?: Distinct< 'atmophile' | 'chalcophile' | 'lithophile' | 'siderophile' | 'synthetic' >;
    superconductivity?: Distinct< 'none' | 'normal' | 'special' >;
} >;
