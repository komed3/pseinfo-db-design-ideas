/**
 * Physical Uncertainty
 */

import { LiteralUnion, StrictSubset } from './abstract';

// Types of uncertainty
export type UncertaintyType = 'absolute' | 'relative' | 'asymmetrical' | 'statistical' | 'estimated' | 'unknown';

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
    statistical: LiteralUnion< 'stddev' | 'stderr' | 'confidence95' >;
}

// Specific uncertainty type definitions
export type AbsoluteUncertainty =
    BaseFields< 'absolute' > &
    StrictSubset<
        UncertaintyFields,
        'deviation',
        never
    >;

export type RelativeUncertainty =
    BaseFields< 'relative' > &
    StrictSubset<
        UncertaintyFields,
        'relative',
        never
    >;

export type AsymmetricalUncertainty =
    BaseFields< 'asymmetrical' > &
    StrictSubset<
        UncertaintyFields,
        'plus' | 'minus',
        never
    >;

export type StatisticalUncertainty =
    BaseFields< 'statistical' > &
    StrictSubset<
        UncertaintyFields,
        'deviation' | 'statistical',
        never
    >;

export type EstimatedUncertainty = BaseFields< 'estimated' >;

export type UnknownUncertainty = BaseFields< 'unknown' >;

// Union type for all uncertainty types
export type Uncertainty =
    | AbsoluteUncertainty | RelativeUncertainty | AsymmetricalUncertainty
    | StatisticalUncertainty | EstimatedUncertainty | UnknownUncertainty;
