// not yet implemented

import { Collection, Distinct } from '../abstract/collection';

export type ClassificationCollection = Collection< {
    symbol: Distinct< string >;
    atomicNumber: Distinct< number >;
    block: Distinct< 's' | 'p' | 'd' | 'f' >;
    column: Distinct< number >;
    group: Distinct< number >;
    period: Distinct< number >;
    set?: Distinct<
        'nonMetal' | 'nobleGas' | 'alkaliMetal' | 'alkalineEarthMetal' | 'metalloid' |
        'halogen' | 'metal' | 'transitionMetal' | 'lanthanoide' | 'actinoide'
    >;
} >;
