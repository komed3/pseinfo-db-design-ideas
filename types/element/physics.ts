import { Collection, Group, Single } from '../abstract/collection';
import { CoupledNumberProperty, NumberProperty, PrimitiveProperty } from '../abstract/property';

export type PhysicsCollection = Collection< {
    density?: Single< NumberProperty< 'density' > >;
    phase?: Single< PrimitiveProperty< string > >;
    soundSpeed?: Single< NumberProperty< 'velocity' > >;
    temperature?: Group< {
        meltingTemp?: Single< NumberProperty< 'temperature' > >;
        boilingTemp?: Single< NumberProperty< 'temperature' > >;
        liquidTemp?: Single< NumberProperty< 'temperature' > >;
        transitionTemp?: Single< NumberProperty< 'temperature' > >;
        sublimationTemp?: Single< NumberProperty< 'temperature' > >;
        criticalPoint?: Single< CoupledNumberProperty< 'temperature' | 'pressure' > >;
        triplePoint?: Single< CoupledNumberProperty< 'temperature' | 'pressure' > >;
    } >;
    enthalpy?: Group< {
        fusionEnthalpy?: Single< NumberProperty< 'enthalpy' > >;
        vaporisationEnthalpy?: Single< NumberProperty< 'enthalpy' > >;
        atomizationEnthalpy?: Single< NumberProperty< 'enthalpy' > >;
    } >;
    heat?: Group< {
        heatCapacity?: Single< NumberProperty< 'heatCapacity' > >;
        thermalConductivity?: Single< NumberProperty< 'thermalConductivity' > >;
        thermalExpansion?: Single< NumberProperty< 'length' | 'area' | 'volume' > >;
        workFunction?: Single< NumberProperty< 'energy' > >;
    } >;
} >;
