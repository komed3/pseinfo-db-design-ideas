import { PhysicalQuantity, UnitRef } from './unit';

// Type of value
export type ValueType = 'primitive' | 'single' | 'array' | 'range' | 'coupled';

// Value confidence / origin of the value
export type ValueConfidence = 'measured' | 'calculated' | 'estimated' | 'theoretical' | 'experimental';

// Value under specific conditions
interface ConditionValue {
    value: number;
    unit_ref?: UnitRef;
    uncertainty?: Uncertainty;
    note?: string;
}

type Conditions = Partial< Record< PhysicalQuantity, ConditionValue[] > >;

// Base fields for all value types
interface BaseFields< T extends ValueType > {
    type: T;
    confidence?: ValueConfidence;
    uncertainty?: Uncertainty;
    conditions?: Conditions;
    references?: RefId[];
    note?: string;
}

// Fields specific to value types
interface ValueFields< Q extends PhysicalQuantity | undefined = undefined > {
    value?: number;
    values?: number[];
    range?: RequireAtLeastOne< Record< 'lower' | 'upper', {
        value: number;
        uncertainty?: Uncertainty;
        inclusive?: boolean;
    } > >;
    unit_ref?: UnitRef< Q >;
}


