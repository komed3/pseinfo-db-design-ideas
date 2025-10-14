// SI base physical dimensions
export type SIDimension =
    | 'time'
    | 'length'
    | 'mass'
    | 'electricCurrent'
    | 'temperature'
    | 'amountOfSubstance'
    | 'luminousIntensity';

// All physical quantities
export type PhysicalQuantity =
    | SIDimension
    | 'area'
    | 'volume'
    | 'velocity'
    | 'acceleration'
    | 'force'
    | 'energy'
    | 'power'
    | 'pressure'
    | 'enthalpy'
    | 'heatCapacity'
    | 'frequency'
    | 'density'
    | 'concentration'
    | 'charge'
    | 'potential'
    | 'resistance'
    | 'conductance'
    | 'capacitance'
    | 'magneticFlux'
    | 'magneticFieldStrength'
    | 'inductance'
    | 'radioactivity'
    | 'absorbedDose'
    | 'equivalentDose'
    | 'catalyticActivity';

// A vector representing the powers of each base dimension in the order:
// [ time, length, mass, electricCurrent, temperature, amountOfSubstance, luminousIntensity ]
type DimensionVector = [ number, number, number, number, number, number, number ];

// Interface describing a physical unit
interface Unit< Q extends PhysicalQuantity > {
    symbol: string;
    quantity: Q;
    name?: string;
    isBase?: boolean;
    conversion?: {
        factor: number;
        offset?: number;
    };
}

// Interface describing a physical quantity and its units
interface Quantity< Q extends PhysicalQuantity > {
    dimension: {
        symbol: string;
        name: string;
        vector: DimensionVector;
    };
    baseUnit: string;
    units: Record< string, Unit< Q > >;
}

// Collection of physical quantities
export type QuantityCollection = {
    [ Q in PhysicalQuantity ]: Quantity< Q >;
};

// Unit reference used in other parts of the data model
export type UnitId< Q extends PhysicalQuantity = PhysicalQuantity > = [
    Q, keyof QuantityCollection[ Q ][ 'units' ]
];
