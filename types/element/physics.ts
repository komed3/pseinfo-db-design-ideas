import { NumberProperty, NumberPropertyGroup, PrimitiveProperty, PropertyCollection, PropertyGroup } from '../property';

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

export interface PhysicsCollection extends PropertyCollection< PhysicsPropertyGroup, PhysicsPropertyName > {
    density?: NumberProperty;
    phase?: PrimitiveProperty;
    soundSpeed?: NumberProperty;
    temperature?: NumberPropertyGroup< 'boilingTemp' | 'liquidTemp' | 'meltingTemp' | 'transitionTemp' | 'sublimationTemp' | 'triplePoint' >;
    enthalpy?: NumberPropertyGroup< 'atomizationEnthalpy' | 'fusionEnthalpy' | 'vaporisationEnthalpy' >;
    heat?: PropertyGroup< 'heatCapacity' | 'thermalConductivity' | 'thermalExpansion' | 'workFunction' >;
    hardness?: PropertyGroup< 'brinellHardness' | 'mohsHardness' | 'vickersHardness' >;
    elasticity?: PropertyGroup< 'bulkModulus' | 'poissonPoint' | 'youngModulus' | 'shearModulus' >;
    electricity?: PropertyGroup< 'electricalConductivity' | 'electricalResistivity' >;
    magnetism?: PropertyGroup< 'magneticSusceptibility' | 'curiePoint' | 'neelPoint' > & {
        magneticOrdering?: PrimitiveProperty;
    };
    optics?: PropertyGroup< 'reflectance' | 'refractiveIndex' >;
}
