// not yet implemented

import { Collection, FormGroup, LangGroup, Single } from '../abstract/collection';
import { PrimitiveProperty } from '../abstract/property';

export type DescriptiveCollection = Collection< {
    names: LangGroup< 'en' | 'la' >;
    appearance?: LangGroup;
    registry: FormGroup< {
        cas: Single< PrimitiveProperty< string > >;
        inChI: Single< PrimitiveProperty< string > >;
        inChIkey: Single< PrimitiveProperty< string > >;
        cid: Single< PrimitiveProperty< string > >;
        echa?: Single< PrimitiveProperty< string > >;
        eg?: Single< PrimitiveProperty< string > >;
        wikidata?: Single< PrimitiveProperty< string > >;
        rtecs?: Single< PrimitiveProperty< string > >;
    } >;
} >;
