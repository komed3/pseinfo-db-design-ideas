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
    hardness?: Group< {
        brinellHardness?: Single< PrimitiveProperty< number > >;
        mohsHardness?: Single< PrimitiveProperty< number > >;
        vickersHardness?: Single< PrimitiveProperty< number > >;
    } >;
    elasticity?: Group< {
        bulkModulus?: Single< NumberProperty< 'pressure' > >;
        shearModulus?: Single< NumberProperty< 'pressure' > >;
        youngModulus?: Single< NumberProperty< 'pressure' > >;
        poissonPoint?: Single< PrimitiveProperty< number > >;
    } >;
    electricity?: Group< {
        electricalConductivity?: Single< NumberProperty< 'conductance' > >;
        electricalResistivity?: Single< NumberProperty< 'resistance' > >;
    } >;
    magnetism?: Group< {
        magneticOrdering?: Single< PrimitiveProperty< string > >;
        magneticSusceptibility?: Single< NumberProperty< 'molarMass' > >;
        curiePoint?: Single< NumberProperty< 'temperature' > >;
        neelPoint?: Single< NumberProperty< 'temperature' > >;
    } >;
    optics?: Group< {
        reflectance?: Single< PrimitiveProperty< number > >;
        refractiveIndex?: Single< PrimitiveProperty< number > >;
    } >;
} >;
