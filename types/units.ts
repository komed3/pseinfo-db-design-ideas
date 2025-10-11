/**
 * Physical Dimensions and Units
 */

// SI base physical dimensions
export type SIDimensionType =
    'time' | 'length' | 'mass' | 'electricCurrent' | 'temperature' |
    'amountOfSubstance' | 'luminousIntensity';

// Derived physical dimensions
export type DerivedDimensionType =
    'area' | 'volume' | 'velocity' | 'acceleration' | 'force' | 'energy' |
    'power' | 'pressure' | 'enthalpy' | 'heatCapacity' | 'frequency' | 'density' |
    'concentration' | 'charge' | 'potential' | 'resistance' | 'conductance' |
    'capacitance' | 'magneticFlux' | 'magneticFieldStrength' | 'inductance' |
    'radioactivity' | 'absorbedDose' | 'equivalentDose' | 'catalyticActivity';

// All physical dimensions
export type PhysicalDimensionType = SIDimensionType | DerivedDimensionType;

// A vector representing the powers of each base dimension in the order:
// [ time, length, mass, electricCurrent, temperature, amountOfSubstance, luminousIntensity ]
type PhysicalDimensionVector = readonly [ number, number, number, number, number, number, number ];

// Interface describing a physical unit
interface PhysicalUnit< T extends PhysicalDimensionType > {
    readonly symbol: string;
    readonly dimension: T;
    readonly name?: string;
    readonly isBase?: boolean;
    readonly conversion?: {
        readonly factor: number;
        readonly offset?: number;
    };
}

// Collection of units for a specific physical dimension
interface QuantityUnits< T extends PhysicalDimensionType > {
    readonly dimension: {
        readonly symbol: string;
        readonly name: string;
        readonly vector: PhysicalDimensionVector;
    };
    readonly baseUnit: string;
    readonly units: Record< string, PhysicalUnit< T > >;
}

// Collection of physical quantities
export type PhysicalQuantities = Partial< {
    readonly [ K in PhysicalDimensionType ]: QuantityUnits< K >;
} >;

// Get the keys of units for a specific physical quantity Q in T
type UnitsForQuantity< T extends PhysicalQuantities, Q extends keyof T > =
    T[ Q ] extends { units: Record< string, any > } ? keyof T[ Q ][ 'units' ] : never;

// A reference to a specific unit for a physical quantity
export type UnitReference< T extends PhysicalQuantities = PhysicalQuantities, Q extends keyof T = keyof T > =
    readonly [ Q, UnitsForQuantity< T, Q > ];
