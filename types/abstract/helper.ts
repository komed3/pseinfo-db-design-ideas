import { Distinct, Group, Single } from './collection';
import { PrimitiveProperty } from './property';
import { RangeValue, SingleValue } from './value';

// Registry identifiers for substances
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

// Toxicity information
export type Toxicity = Distinct< {
    type: 'EC50' | 'LC50' | 'LD50' | 'TD50' | 'LOAEL' | 'LOEL' | 'NOAEL' | 'NOEL';
    organism: string;
    value: SingleValue< 'massFraction' > | RangeValue< 'massFraction' >;
    application?: 'oral' | 'dermal' | 'inhalation' | 'intravenous' | 'intraperitoneal' | 'subcutaneous';
    duration?: string;
}[] >;
