import { Collection, Distinct, Group, LangGroup, Single } from '../abstract/collection';
import { RegistryGroup } from '../abstract/helper';
import { NumberProperty } from '../abstract/property';

export type DescriptiveCollection = Collection< {
    names: LangGroup< 'en' | 'la' >;
    appearance?: LangGroup;
    registry: RegistryGroup;
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
    } >;
} >;
