/**
 * Physical Uncertainty
 */

import { LiteralUnion } from './abstract';

// Types of uncertainty
export type UncertaintyType = 'absolute' | 'relative' | 'asymmetrical' | 'statistical';

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


