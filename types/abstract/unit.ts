// List of SI base dimensions
export const SIDimension = [
    'time', 'length', 'mass', 'electricCurrent', 'temperature',
    'amountOfSubstance', 'luminousIntensity'
] as const;

// Type representing any valid SI base dimension
export type SIDimension = ( typeof SIDimension )[ number ];

// List of all physical quantities including SI base dimensions and derived quantities
export const PhysicalQuantity = [ ...SIDimension,
    'absorbedDose', 'acceleration', 'area', 'capacitance', 'catalyticActivity',
    'charge', 'concentration', 'conductance', 'density', 'electricPotential',
    'energy', 'enthalpy', 'equivalentDose', 'force', 'frequency', 'heatCapacity',
    'inductance', 'magneticFlux', 'magneticFieldStrength', 'massFraction', 'molarMass',
    'power', 'pressure', 'quantity', 'radioactivity', 'resistance',
    'thermalConductivity', 'velocity', 'volume'
] as const;

// Type representing any valid physical quantity
export type PhysicalQuantity = ( typeof PhysicalQuantity )[ number ];

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
