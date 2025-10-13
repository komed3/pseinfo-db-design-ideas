import { OneOrMany } from '../abstract';
import { NumberValue, Value } from '../value';

export type PhysicalPropertyGroup =
    'density' | 'elasticity' | 'electricity' | 'enthalpy' | 'hardness' | 'heat' |
    'magnetism' | 'optics' | 'phase' | 'soundSpeed' | 'temperature';

export type PhysicalPropertyName =
    'density' | 'bulkModulus' | 'poissonPoint' | 'youngModulus' | 'shearModulus' |
    'electricalConductivity' | 'electricalResistivity' | 'atomizationEnthalpy' |
    'fusionEnthalpy' | 'vaporisationEnthalpy' | 'brinellHardness' | 'mohsHardness' |
    'vickersHardness' | 'heatCapacity' | 'thermalConductivity' | 'thermalExpansion' |
    'workFunction' | 'magneticOrdering' | 'magneticSusceptibility' | 'reflectance' |
    'refractiveIndex' | 'phase' | 'soundSpeed' | 'boilingTemp' | 'liquidTemp' |
    'meltingTemp' | 'transitionTemp' | 'sublimationTemp' | 'triplePoint' |
    'curiePoint' | 'neelPoint';

export interface PhysicalCollection {
    density?: OneOrMany< NumberValue >;
    elasticity?: {
        bulkModulus?: OneOrMany< NumberValue >;
        poissonPoint?: OneOrMany< NumberValue >;
        youngModulus?: OneOrMany< NumberValue >;
        shearModulus?: OneOrMany< NumberValue >;
    };
    electricity?: {
        electricalConductivity?: OneOrMany< NumberValue >;
        electricalResistivity?: OneOrMany< NumberValue >;
    };
    enthalpy?: {
        atomizationEnthalpy?: OneOrMany< NumberValue >;
        fusionEnthalpy?: OneOrMany< NumberValue >;
        vaporisationEnthalpy?: OneOrMany< NumberValue >;
    };
    hardness?: {
        brinellHardness?: OneOrMany< NumberValue >;
        mohsHardness?: OneOrMany< NumberValue >;
        vickersHardness?: OneOrMany< NumberValue >;
    };
    heat?: {
        heatCapacity?: OneOrMany< NumberValue >;
        thermalConductivity?: OneOrMany< NumberValue >;
        thermalExpansion?: OneOrMany< NumberValue >;
        workFunction?: OneOrMany< NumberValue >;
    };
    magnetism?: {
        magneticOrdering?: OneOrMany< Value >;
        magneticSusceptibility?: OneOrMany< NumberValue >;
        curiePoint?: OneOrMany< NumberValue >;
        neelPoint?: OneOrMany< NumberValue >;
    };
    optics?: {
        reflectance?: OneOrMany< NumberValue >;
        refractiveIndex?: OneOrMany< NumberValue >;
    };
    phase?: OneOrMany< Value >;
    soundSpeed?: OneOrMany< NumberValue >;
    temperature?: {
        boilingTemp?: OneOrMany< NumberValue >;
        liquidTemp?: OneOrMany< NumberValue >;
        meltingTemp?: OneOrMany< NumberValue >;
        transitionTemp?: OneOrMany< NumberValue >;
        sublimationTemp?: OneOrMany< NumberValue >;
        triplePoint?: OneOrMany< NumberValue >;
    };
}
