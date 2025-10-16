// SI base dimensions
export const SIDimension = [
    'time', 'length', 'mass', 'electricCurrent', 'temperature',
    'amountOfSubstance', 'luminousIntensity'
] as const;

export type SIDimension = ( typeof SIDimension )[ number ];

// All physical quantities including SI base dimensions and derived quantities
export const PhysicalQuantity = [ ...SIDimension,
    'absorbedDose', 'acceleration', 'area', 'capacitance', 'catalyticActivity',
    'charge', 'concentration', 'conductance', 'density', 'electricPotential',
    'energy', 'enthalpy', 'equivalentDose', 'force', 'frequency', 'heatCapacity',
    'inductance', 'magneticFlux', 'magneticFieldStrength', 'massFraction', 'molarMass',
    'power', 'pressure', 'quantity', 'radioactivity', 'resistance',
    'thermalConductivity', 'velocity', 'volume'
] as const;

export type PhysicalQuantity = ( typeof PhysicalQuantity )[ number ];

// A vector representing the powers of each base dimension in the order:
// [ time, length, mass, electricCurrent, temperature, amountOfSubstance, luminousIntensity ]
type DimensionVector = [ number, number, number, number, number, number, number ];

// Interface describing a physical unit
type Unit< Q extends PhysicalQuantity > = {
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
type Quantity< Q extends PhysicalQuantity > = {
    dimension: {
        symbol: string;
        name: string;
        si: Q extends SIDimension ? true : false;
        vector: DimensionVector;
    };
    baseUnit: string;
    units: Record< string, Unit< Q > >;
}

// Collection of physical quantities and their units
export type UnitCollection = {
    [ Q in PhysicalQuantity ]: Quantity< Q >;
};

// Unit reference used in other parts of the data model
export type UnitId< Q extends PhysicalQuantity = PhysicalQuantity > = [ Q, string ];
