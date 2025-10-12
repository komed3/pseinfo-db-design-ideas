/**
 * Physical Uncertainty
 */

import { RequireFrom } from './abstract';

// Types of uncertainty
export type UncertaintyType = 'absolute' | 'relative' | 'asymmetrical';

// Base fields for all uncertainty types
interface BaseFields< T extends UncertaintyType > {
    type: T;
    confidence?: number;
    note?: string;
}

// Fields specific to different uncertainty types
interface UncertaintyFields {
    deviation?: number;
    relative?: number;
    plus?: number;
    minus?: number;
}

// Specific uncertainty type definitions
export type AbsoluteUncertainty = BaseFields< 'absolute' > & RequireFrom< UncertaintyFields, 'deviation' >;

export type RelativeUncertainty = BaseFields< 'relative' > & RequireFrom< UncertaintyFields, 'relative' >;

export type AsymmetricalUncertainty = BaseFields< 'asymmetrical' > & RequireFrom< UncertaintyFields, 'plus' | 'minus' >;

// Union type for all uncertainty types
export type Uncertainty = AbsoluteUncertainty | RelativeUncertainty | AsymmetricalUncertainty;