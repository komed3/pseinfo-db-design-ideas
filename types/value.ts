/**
 * Complex Physical Values
 */

import { OneOrMany } from './abstract';
import { Uncertainty } from './uncertainty';
import { PhysicalQuantity, UnitId } from './unit';

// Type of value
export type ValueType = 'single' | 'array' | 'range' | 'coupled';

// Value confidence / origin of the value
export type ValueConfidence = 'measured' | 'calculated' | 'estimated' | 'theoretical' | 'experimental';

// Value under specific conditions
interface ConditionValue {
  value: number;
  unit_ref?: UnitId;
  uncertainty?: Uncertainty;
  note?: string;
}

type Conditions = Partial< Record< PhysicalQuantity, OneOrMany< ConditionValue > > >;
