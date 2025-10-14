import { Group, Single } from './collection';
import { PrimitiveProperty } from './property';

export type RegistryGroup = Group< {
    cas: Single< PrimitiveProperty< string > >;
    inChI: Single< PrimitiveProperty< string > >;
    inChIkey: Single< PrimitiveProperty< string > >;
    cid: Single< PrimitiveProperty< string > >;
    echa?: Single< PrimitiveProperty< string > >;
    eg?: Single< PrimitiveProperty< string > >;
    wikidata?: Single< PrimitiveProperty< string > >;
    rtecs?: Single< PrimitiveProperty< string > >;
} >;
