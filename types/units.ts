export type SIDimensionType =
    'time' | 'length' | 'mass' | 'electricCurrent' | 'temperature' |
    'amountOfSubstance' | 'luminousIntensity';

export type DerivedDimensionType =
    'area' | 'volume' | 'velocity' | 'acceleration' | 'force' | 'energy' |
    'power' | 'pressure' | 'enthalpy' | 'heatCapacity' | 'frequency' | 'density' |
    'concentration' | 'charge' | 'potential' | 'resistance' | 'conductance' | 'capacitance' |
    'magneticFlux' | 'magneticFieldStrength' | 'inductance' | 'radioactivity' |
    'absorbedDose' | 'equivalentDose' | 'catalyticActivity';

export type PhysicalDimensionType = SIDimensionType | DerivedDimensionType;

type DimensionVector = readonly [ number, number, number, number, number, number, number ];
