/**
 * Physical Dimensions and Units
 */

// SI base physical dimensions
export type SIDimension =
    'time' | 'length' | 'mass' | 'electricCurrent' | 'temperature' |
    'amountOfSubstance' | 'luminousIntensity';

// All physical dimensions
export type PhysicalDimension = SIDimension |
    'area' | 'volume' | 'velocity' | 'acceleration' | 'force' | 'energy' |
    'power' | 'pressure' | 'enthalpy' | 'heatCapacity' | 'frequency' | 'density' |
    'concentration' | 'charge' | 'potential' | 'resistance' | 'conductance' |
    'capacitance' | 'magneticFlux' | 'magneticFieldStrength' | 'inductance' |
    'radioactivity' | 'absorbedDose' | 'equivalentDose' | 'catalyticActivity';

// A vector representing the powers of each base dimension in the order:
// [ time, length, mass, electricCurrent, temperature, amountOfSubstance, luminousIntensity ]
type DimensionVector = [ number, number, number, number, number, number, number ];

// Interface describing a physical unit
interface PhysicalUnit< T extends PhysicalDimension > {
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
interface QuantityUnits< T extends PhysicalDimension > {
    dimension: {
        symbol: string;
        name: string;
        vector: DimensionVector;
    };
    baseUnit: string;
    units: Record< string, PhysicalUnit< T > >;
}

// Collection of physical quantities
export type PhysicalQuantities = { [ K in PhysicalDimension ]: QuantityUnits< K > };

// Get the keys of units for a specific physical quantity Q in T
type UnitsForQuantity< T extends PhysicalQuantities, Q extends keyof T > =
    T[ Q ] extends { units: Record< string, any > } ? keyof T[ Q ][ 'units' ] : never;

// Reference IDs used in other parts of the data model
export type UnitId< T extends PhysicalQuantities = PhysicalQuantities, Q extends keyof T = keyof T > =
    [ Q, UnitsForQuantity< T, Q > ];
