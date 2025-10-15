import { Collection, Distinct, Group, LangGroup, Single } from '../abstract/collection';
import { ElementProperty, Registry } from '../abstract/helper';
import { NumberProperty, PrimitiveProperty } from '../abstract/property';

export type DescriptiveCollection = Collection< {
    registry: Registry;
    names: LangGroup< 'en' | 'la' >;
    appearance?: LangGroup;
    abundance?: Group< {
        universeAbundance?: Single< NumberProperty< 'quantity' > >;
        sunAbundance?: Single< NumberProperty< 'quantity' > >;
        meteoriteAbundance?: Single< NumberProperty< 'quantity' > >;
        crustalAbundance?: Single< NumberProperty< 'quantity' > >;
        seaAbundance?: Single< NumberProperty< 'quantity' > >;
        streamAbundance?: Single< NumberProperty< 'quantity' > >;
        humanAbundance?: Single< NumberProperty< 'quantity' > >;
    } >;
    discovery?: Group< {
        year?: Distinct< number >;
        discoverer?: Distinct< string >;
        country?: Distinct< string >;
        institute?: Distinct< string >;
    } >;
    properties?: Distinct< ElementProperty[] >;
    media?: Group< {
        images?: Distinct< {
            url: string;
            caption: string;
            text?: string;
        }[] >;
        spectrum?: PrimitiveProperty< string >;
    } >;
    weblinks?: Distinct< {
        url: string;
        text?: string;
        archiveUrl?: string;
        accessed?: string;
    }[] >;
    wiki?: LangGroup;
} >;
