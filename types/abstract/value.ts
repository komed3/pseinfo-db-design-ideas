import { Uncertainty } from './uncertainty';
import { RefId } from './reference';
import { PhysicalQuantity, UnitId } from './unit';
import { Primitive, RequireAtLeastOne } from './utils';

// Type of value
export type ValueType = 'primitive' | 'single' | 'array' | 'range' | 'coupled';

// Value confidence / origin of the value
export type ValueConfidence = 'measured' | 'calculated' | 'estimated' | 'theoretical' | 'experimental';

// Base fields for all value types
interface BaseFields< T extends ValueType > {
    type: T;
    confidence?: ValueConfidence;
    uncertainty?: Uncertainty;
    references?: RefId[];
    note?: string;
}

// Fields specific to value types
interface ValueFields< Q extends PhysicalQuantity = PhysicalQuantity > {
    value?: number;
    values?: number[];
    range?: RequireAtLeastOne< Record< 'lower' | 'upper', {
        value: number;
        uncertainty?: Uncertainty;
        inclusive?: boolean;
    } > >;
    unit_ref?: UnitId< Q >;
}

// Specific value type definitions
export type PrimitiveValue< T extends Primitive = Primitive > = BaseFields< 'primitive' > & { value: T };

// Union type for all uncertainty types
export type Value<
    Q extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = PrimitiveValue< T >;
