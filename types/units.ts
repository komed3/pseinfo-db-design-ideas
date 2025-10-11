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

type PhysicalDimensionVector = readonly [ number, number, number, number, number, number, number ];

interface PhysicalDimension {
    readonly symbol: string;
    readonly name: string;
    readonly vector: PhysicalDimensionVector;
}

interface SIConversion {
    readonly factor: number;
    readonly offset?: number;
}

interface PhysicalUnit< T extends PhysicalDimensionType > {
    readonly symbol: string;
    readonly dimension: T;
    readonly name?: string;
    readonly isBase?: boolean;
    readonly conversion?: SIConversion;
}

interface QuantityUnits< T extends PhysicalDimensionType > {
    readonly dimension: PhysicalDimension;
    readonly baseUnit: string;
    readonly units: Record< string, PhysicalUnit< T > >;
}

export type PhysicalQuantities = {
    readonly [ K in PhysicalDimensionType ]: QuantityUnits< K >;
};
