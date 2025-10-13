import { NumberProperty, NumberPropertyGroup, PrimitiveProperty, PropertyCollection } from '../property';

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
    heat?: NumberPropertyGroup< 'heatCapacity' | 'thermalConductivity' | 'thermalExpansion' | 'workFunction' >;
    hardness?: NumberPropertyGroup< 'brinellHardness' | 'mohsHardness' | 'vickersHardness' >;
    elasticity?: NumberPropertyGroup< 'bulkModulus' | 'poissonPoint' | 'youngModulus' | 'shearModulus' >;
    electricity?: NumberPropertyGroup< 'electricalConductivity' | 'electricalResistivity' >;
    magnetism?: NumberPropertyGroup< 'magneticSusceptibility' | 'curiePoint' | 'neelPoint' > & {
        magneticOrdering?: PrimitiveProperty;
    };
    optics?: NumberPropertyGroup< 'reflectance' | 'refractiveIndex' >;
}
