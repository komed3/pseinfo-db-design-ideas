// not yet implemented

import { Collection, LangGroup } from '../abstract/collection';
import { RegistryGroup } from '../abstract/helper';

export type DescriptiveCollection = Collection< {
    names: LangGroup< 'en' | 'la' >;
    appearance?: LangGroup;
    registry: RegistryGroup;
} >;
