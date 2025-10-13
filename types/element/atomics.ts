/**
 * Element Atomics Property Types
 */

import { ArrayProperty, Group, MapPropertyDefinition, NumberProperty, PrimitiveProperty, Single } from '../property';

export type AtomicsCollection = MapPropertyDefinition< {
    electronConfig?: Single< PrimitiveProperty >;
    shellModel?: Single< ArrayProperty >;
    ionization?: Single< ArrayProperty >;
    mass?: Group< {
        atomicMass?: Single< NumberProperty >;
        stdAtomicWeight?: Single< NumberProperty >;
    } >;
    radius?: Group< {
        calculatedRadius?: Single< NumberProperty >;
        covalentRadius?: Single< NumberProperty >;
        empiricalRadius?: Single< NumberProperty >;
        vdwRadius?: Single< NumberProperty >;
    } >;
} >;
