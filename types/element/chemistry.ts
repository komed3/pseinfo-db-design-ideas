import { Collection, Distinct, FormGroup, Group, Single } from '../abstract/collection';
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
    crystalSystem?: FormGroup< {
        crystalStructure?: Distinct<
            'hex' | 'hcp' | 'bcc' | 'rho' | 'sc' | 'fcc' | 'dc' |
            'orth' | 'tetr' | 'dhcp' | 'mon'
        >;
        pearsonSymbol?: Distinct< string >;
        spaceGroup?: Distinct< string >;
        spaceGroupNumber?: Distinct< number >;
        latticeConstant?: Group< {
            a?: Distinct< number >;
            b?: Distinct< number >;
            c?: Distinct< number >;
            alpha?: Distinct< number >;
            beta?: Distinct< number >;
            gamma?: Distinct< number >;
        } >;
    } >;
} >;
