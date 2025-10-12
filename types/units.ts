/**
 * Physical Dimensions and Units
 */

// SI base physical dimensions
export type SIDimensionType =
    'time' | 'length' | 'mass' | 'electricCurrent' | 'temperature' |
    'amountOfSubstance' | 'luminousIntensity';

// All physical dimensions
export type PhysicalDimensionType = SIDimensionType |
    'area' | 'volume' | 'velocity' | 'acceleration' | 'force' | 'energy' |
    'power' | 'pressure' | 'enthalpy' | 'heatCapacity' | 'frequency' | 'density' |
    'concentration' | 'charge' | 'potential' | 'resistance' | 'conductance' |
    'capacitance' | 'magneticFlux' | 'magneticFieldStrength' | 'inductance' |
    'radioactivity' | 'absorbedDose' | 'equivalentDose' | 'catalyticActivity';

// A vector representing the powers of each base dimension in the order:
// [ time, length, mass, electricCurrent, temperature, amountOfSubstance, luminousIntensity ]
type PhysicalDimensionVector = [ number, number, number, number, number, number, number ];

// Interface describing a physical unit
interface PhysicalUnit< T extends PhysicalDimensionType > {
    symbol: string;
    dimension: T;
    name?: string;
    isBase?: boolean;
    conversion?: {
        factor: number;
        offset?: number;
    };
}

// Collection of units for a specific physical dimension
interface QuantityUnits< T extends PhysicalDimensionType > {
    dimension: {
        symbol: string;
        name: string;
        vector: PhysicalDimensionVector;
    };
    baseUnit: string;
    units: Record< string, PhysicalUnit< T > >;
}

// Collection of physical quantities
export type PhysicalQuantities = Partial< { [ K in PhysicalDimensionType ]: QuantityUnits< K > } >;

// Get the keys of units for a specific physical quantity Q in T
type UnitsForQuantity< T extends PhysicalQuantities, Q extends keyof T > =
    T[ Q ] extends { units: Record< string, any > } ? keyof T[ Q ][ 'units' ] : never;

// A reference to a specific unit for a physical quantity
export type UnitReference< T extends PhysicalQuantities = PhysicalQuantities, Q extends keyof T = keyof T > =
    [ Q, UnitsForQuantity< T, Q > ];
