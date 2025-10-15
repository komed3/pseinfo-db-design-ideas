import { Collection, Distinct } from '../abstract/collection';
import { ElementBlock, ElementSet, Goldschmidt, NaturalOccurrence, Phase, Superconductivity } from '../abstract/helper';

export type ClassificationCollection = Collection< {
    symbol: Distinct< string >;
    atomicNumber: Distinct< number >;
    block: Distinct< ElementBlock >;
    column: Distinct< number >;
    group: Distinct< number >;
    period: Distinct< number >;
    radioactive: Distinct< boolean >;
    set?: Distinct< ElementSet >;
    phase?: Distinct< Phase >;
    naturalOccurrence?: Distinct< NaturalOccurrence >;
    goldschmidt?: Distinct< Goldschmidt >;
    superconductivity?: Distinct< Superconductivity >;
} >;
