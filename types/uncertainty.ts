/**
 * Physical Uncertainty
 */

import { LiteralUnion } from './abstract';

// Types of uncertainty
export type UncertaintyType = 'absolute' | 'relative' | 'asymmetrical' | 'statistical' | 'estimated' | 'unknown';

// Base interface for uncertainty types
interface BaseUncertainty< T extends UncertaintyType > {
    type: T;
    confidence?: number;
    note?: string;
}

// Specific uncertainty type interfaces
interface AbsoluteUncertainty extends BaseUncertainty< 'absolute' > {
    deviation: number;
}

interface RelativeUncertainty extends BaseUncertainty< 'relative' > {
    relative: number;
}

interface AsymmetricalUncertainty extends BaseUncertainty< 'asymmetrical' > {
    plus: number;
    minus: number;
}

interface StatisticalUncertainty extends BaseUncertainty< 'statistical' > {
    deviation: number;
    statistical: LiteralUnion< 'stddev' | 'stderr' | 'confidence95' >;
}

type EstimatedUncertainty = BaseUncertainty< 'estimated' >;

type UnknownUncertainty = BaseUncertainty< 'unknown' >;

// Union type for all uncertainty types
export type Uncertainty =
    | AbsoluteUncertainty | RelativeUncertainty | AsymmetricalUncertainty
    | StatisticalUncertainty | EstimatedUncertainty | UnknownUncertainty;
