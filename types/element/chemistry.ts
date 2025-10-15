import { Collection, Group, Single } from '../abstract/collection';
import { CrystalGroup } from '../abstract/helper';
import { NumberProperty, PrimitiveProperty } from '../abstract/property';

export type ChemistryCollection = Collection< {
    molarMass?: Single< NumberProperty< 'molarMass' > >;
    basicity?: Single< PrimitiveProperty< string > >;
    electronegativity?: Group< {
        paulingNegativity?: Single< PrimitiveProperty< number > >;
        sandersonNegativity?: Single< PrimitiveProperty< number > >;
        allredNegativity?: Single< PrimitiveProperty< number > >;
        mullikenNegativity?: Single< PrimitiveProperty< number > >;
        allenNegativity?: Single< PrimitiveProperty< number > >;
        ghoshGuptaNegativity?: Single< NumberProperty< 'energy' > >;
        nagleNegativity?: Single< PrimitiveProperty< number > >;
        pearsonNegativity?: Single< NumberProperty< 'energy' > >;
    } >;
    oxidationState?: Single< PrimitiveProperty< string > >;
    oxideCharacter?: Single< PrimitiveProperty< string > >;
    standardPotential?: Single< NumberProperty< 'electricPotential' > >;
    crystalSystem?: CrystalGroup;
} >;
