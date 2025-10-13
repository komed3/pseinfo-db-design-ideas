import { NumberProperty, Property, PropertyGroup } from '../property';

export type PhysicsPropertyGroup =
    'density' | 'phase' | 'soundSpeed' | 'temperature' | 'enthalpy' | 'heat' |
    'hardness' | 'elasticity' | 'electricity' | 'magnetism' | 'optics';

export type PhysicsPropertyName =
    'density' | 'phase' | 'soundSpeed' | 'boilingTemp' | 'liquidTemp' | 'meltingTemp' | 'transitionTemp' |
    'sublimationTemp' | 'triplePoint' | 'atomizationEnthalpy' | 'fusionEnthalpy' | 'vaporisationEnthalpy' |
    'heatCapacity' | 'thermalConductivity' | 'thermalExpansion' | 'workFunction' | 'brinellHardness' |
    'mohsHardness' | 'vickersHardness' | 'bulkModulus' | 'poissonPoint' | 'youngModulus' | 'shearModulus' |
    'electricalConductivity' | 'electricalResistivity' | 'magneticOrdering' | 'magneticSusceptibility' |
    'curiePoint' | 'neelPoint' | 'reflectance' | 'refractiveIndex';

export interface PhysicsCollection {
    density?: NumberProperty;
    phase?: Property;
    soundSpeed?: NumberProperty;
    temperature?: PropertyGroup< 'boilingTemp' | 'liquidTemp' | 'meltingTemp' | 'transitionTemp' | 'sublimationTemp' | 'triplePoint' >;
    enthalpy?: PropertyGroup< 'atomizationEnthalpy' | 'fusionEnthalpy' | 'vaporisationEnthalpy' >;
    heat?: PropertyGroup< 'heatCapacity' | 'thermalConductivity' | 'thermalExpansion' | 'workFunction' >;
    hardness?: PropertyGroup< 'brinellHardness' | 'mohsHardness' | 'vickersHardness' >;
    elasticity?: PropertyGroup< 'bulkModulus' | 'poissonPoint' | 'youngModulus' | 'shearModulus' >;
    electricity?: PropertyGroup< 'electricalConductivity' | 'electricalResistivity' >;
    magnetism?: PropertyGroup< 'magneticOrdering' | 'magneticSusceptibility' | 'curiePoint' | 'neelPoint' >;
    optics?: PropertyGroup< 'reflectance' | 'refractiveIndex' >;
}
