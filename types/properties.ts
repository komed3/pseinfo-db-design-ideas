import { RequireAtLeastOne } from './abstract';
import { References } from './references';
import { Uncertainty } from './uncertainty';
import { PhysicalDimension, PhysicalQuantities, UnitReference } from './units';

export type ValueOrigin =
    'measured' | 'calculated' | 'estimated' | 'theoretical' | 'experimental' | 'literature' |
    'recommended' | 'critical' | 'standard' | 'extrapolated' | 'interpolated';

interface BaseValue< T, D extends PhysicalDimension = PhysicalDimension > {
    type: T;
    origin?: ValueOrigin;
    form_refs?: any;
    unit_ref?: UnitReference< PhysicalQuantities, D >;
    conditions?: any;
    references?: Array< keyof References >;
    note?: string;
}

export interface SingleValue< D extends PhysicalDimension = PhysicalDimension > extends BaseValue< 'single', D > {
    value: number;
    uncertainty?: Uncertainty;
}

export interface RangeValue< D extends PhysicalDimension = PhysicalDimension > extends BaseValue< 'range', D > {
    value?: number;
    uncertainty?: Uncertainty;
    range: RequireAtLeastOne< Record< 'lower' | 'upper', {
        value: number;
        uncertainty?: Uncertainty;
        inclusive?: boolean;
    } > >;
}
