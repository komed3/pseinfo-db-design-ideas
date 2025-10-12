import { RequireAtLeastOne } from './abstract';
import { PhysicalDimension, PhysicalQuantities, UnitReference } from './units';

export type ValueOrigin =
    'measured' | 'calculated' | 'estimated' | 'theoretical' | 'experimental' | 'literature' |
    'recommended' | 'critical' | 'standard' | 'extrapolated' | 'interpolated';

interface Uncertainty {
    deviation?: number;
}

interface BaseValue< T extends PhysicalDimension = PhysicalDimension > {
    origin?: ValueOrigin;
    form_refs?: ;
    unit_ref?: UnitReference< PhysicalQuantities, T >;
    conditions?: ;
    references?: string[];
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

const test: RangeValue< 'mass' > = {
    value: 1.0008,
    range: {
        lower: { value: 1, inclusive: true },
        upper: { value: 1.001, uncertainty: { deviation: 2e-4 } }
    },
    unit_ref: [ 'mass', 'u' ],
    origin: 'standard'
};
