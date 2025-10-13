/**
 * Element Chemistry Property Types
 */

import { Group, MapPropertyDefinition, NumberProperty, PrimitiveProperty, Single } from '../property';

// Chemistry property names
export type ChemistryPropertyGroup = 'electronegativity';

export type ChemistryProperty =
    'molarMass' | 'basicity' | 'paulingNegativity' | 'sandersonNegativity' | 'allredNegativity' |
    'mullikenNegativity' | 'allenNegativity' | 'ghoshGuptaNegativity' | 'nagleNegativity' |
    'pearsonNegativity' | 'oxidationState' | 'oxideCharacter' | 'standardPotential';

// Collection of chemistry properties
export type ChemistryCollection = MapPropertyDefinition< {
    molarMass?: Single< NumberProperty >;
    basicity?: Single< PrimitiveProperty >;
    electronegativity?: Group< {
        paulingNegativity?: Single< NumberProperty >;
        sandersonNegativity?: Single< NumberProperty >;
        allredNegativity?: Single< NumberProperty >;
        mullikenNegativity?: Single< NumberProperty >;
        allenNegativity?: Single< NumberProperty >;
        ghoshGuptaNegativity?: Single< NumberProperty >;
        nagleNegativity?: Single< NumberProperty >;
        pearsonNegativity?: Single< NumberProperty >;
    } >;
    oxidationState?: Single< PrimitiveProperty >;
    oxideCharacter?: Single< PrimitiveProperty >;
    standardPotential?: Single< NumberProperty >;
} >;
