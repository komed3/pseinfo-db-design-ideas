import { PhysicalQuantity } from './unit';
import { Primitive } from './utils';
import { Value } from './value';

// Values under specific conditions
export type Conditions<
    Q extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = { [ K in Q ]?: Value< K, T > };
