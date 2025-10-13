/**
 * Element Physics Property Types
 */

import { Group, MapPropertyDefinition, NumberProperty, PrimitiveProperty, Single } from '../property';

// Physics property names
export type PhysicsPropertyGroup =
    'temperature' | 'enthalpy' | 'heat' | 'hardness' | 'elasticity' | 'electricity' |
    'magnetism' | 'optics';

export type PhysicsProperty =
    'density' | 'phase' | 'soundSpeed' | 'boilingTemp' | 'liquidTemp' | 'meltingTemp' |
    'transitionTemp' | 'sublimationTemp' | 'triplePoint' | 'atomizationEnthalpy' |
    'fusionEnthalpy' | 'vaporisationEnthalpy' | 'heatCapacity' | 'thermalConductivity' |
    'thermalExpansion' | 'workFunction' | 'brinellHardness' | 'mohsHardness' |
    'vickersHardness' | 'bulkModulus' | 'poissonPoint' | 'youngModulus' | 'shearModulus' |
    'electricalConductivity' | 'electricalResistivity' | 'magneticOrdering' |
    'magneticSusceptibility' | 'curiePoint' | 'neelPoint' | 'reflectance' |
    'refractiveIndex';

// Collection of physics properties
export type PhysicsCollection = MapPropertyDefinition< {
    density?: Single< NumberProperty >;
    phase?: Single< PrimitiveProperty >;
    soundSpeed?: Single< NumberProperty >;
    temperature?: Group< {
        boilingTemp?: Single< NumberProperty >;
        liquidTemp?: Single< NumberProperty >;
        meltingTemp?: Single< NumberProperty >;
        transitionTemp?: Single< NumberProperty >;
        sublimationTemp?: Single< NumberProperty >;
        triplePoint?: Single< NumberProperty >;
    } >;
    enthalpy?: Group< {
        atomizationEnthalpy?: Single< NumberProperty >;
        fusionEnthalpy?: Single< NumberProperty >;
        vaporisationEnthalpy?: Single< NumberProperty >;
    } >;
    heat?: Group< {
        heatCapacity?: Single< NumberProperty >;
        thermalConductivity?: Single< NumberProperty >;
        thermalExpansion?: Single< NumberProperty >;
        workFunction?: Single< NumberProperty >;
    } >;
    hardness?: Group< {
        brinellHardness?: Single< NumberProperty >;
        mohsHardness?: Single< NumberProperty >;
        vickersHardness?: Single< NumberProperty >;
    } >;
    elasticity?: Group< {
        bulkModulus?: Single< NumberProperty >;
        poissonPoint?: Single< NumberProperty >;
        youngModulus?: Single< NumberProperty >;
        shearModulus?: Single< NumberProperty >;
    } >;
    electricity?: Group< {
        electricalConductivity?: Single< NumberProperty >;
        electricalResistivity?: Single< NumberProperty >;
    } >;
    magnetism?: Group< {
        magneticOrdering?: Single< PrimitiveProperty >;
        magneticSusceptibility?: Single< NumberProperty >;
        curiePoint?: Single< NumberProperty >;
        neelPoint?: Single< NumberProperty >;
    } >;
    optics?: Group< {
        reflectance?: Single< NumberProperty >;
        refractiveIndex?: Single< NumberProperty >;
    } >;
} >;
