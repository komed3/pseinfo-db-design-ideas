import { PhysicalQuantity } from './unit';
import { Primitive } from './utils';
import { Value } from './value';

// Values under specific conditions
export type Conditions< T extends Primitive = Primitive > = {
    [ K in PhysicalQuantity ]?: Value< K, T >;
};
