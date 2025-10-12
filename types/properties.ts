import { PhysicalDimension, PhysicalQuantities, UnitReference } from './units';

export type ValueOrigin =
    'measured' | 'calculated' | 'estimated' | 'theoretical' | 'experimental' | 'literature' |
    'recommended' | 'critical' | 'standard' | 'extrapolated' | 'interpolated';

interface BaseValue< T extends PhysicalDimension = PhysicalDimension > {
  origin?: ValueOrigin;
  form_refs?: ;
  unit_ref?: UnitReference< PhysicalQuantities, T >;
  conditions?: ;
  references?: string[];
  note?: string;
}
