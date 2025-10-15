import { Collection, Distinct, Group, Single } from '../abstract/collection';
import { ShellModel } from '../abstract/helper';
import { ArrayProperty, NumberProperty, PrimitiveProperty } from '../abstract/property';

export type AtomicsCollection = Collection< {
    electronConfig?: Single< PrimitiveProperty< string > >;
    shellModel?: Distinct< {
        [ K in ShellModel ]?: number;
    } >;
    ionization?: Single< ArrayProperty< 'energy' > >;
    mass?: Group< {
        atomicMass?: Single< NumberProperty< 'mass' > >;
        stdAtomicWeight?: Single< PrimitiveProperty< number > >;
    } >;
    radius?: Group< {
        empiricalRadius?: Single< NumberProperty< 'length' > >;
        calculatedRadius?: Single< NumberProperty< 'length' > >;
        covalentRadius?: Single< NumberProperty< 'length' > >;
        vdwRadius?: Single< NumberProperty< 'length' > >;
    } >;
} >;
