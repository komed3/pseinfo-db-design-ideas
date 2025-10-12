import { RequireAtLeastOne } from './abstract';
import { References } from './references';
import { Uncertainty } from './uncertainty';
import { PhysicalDimension, PhysicalQuantities, UnitReference } from './units';

export type ValueOrigin =
    'measured' | 'calculated' | 'estimated' | 'theoretical' | 'experimental' | 'literature' |
    'recommended' | 'critical' | 'standard' | 'extrapolated' | 'interpolated';

interface BaseValue< T extends PhysicalDimension = PhysicalDimension > {
    origin?: ValueOrigin;
    form_refs?: any;
    unit_ref?: UnitReference< PhysicalQuantities, T >;
    conditions?: any;
    references?: Array< keyof References >;
    note?: string;
}

export interface SingleValue< T extends PhysicalDimension = PhysicalDimension > extends BaseValue< T > {
    value: number;
    uncertainty?: Uncertainty;
}

export interface RangeValue< T extends PhysicalDimension = PhysicalDimension > extends BaseValue< T > {
    value?: number;
    uncertainty?: Uncertainty;
    range: RequireAtLeastOne< Record< 'lower' | 'upper', {
        value: number;
        uncertainty?: Uncertainty;
        inclusive?: boolean;
    } > >;
}
