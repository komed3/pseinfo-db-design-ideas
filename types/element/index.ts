import { Collection } from '../abstract/collection';
import { AtomicsCollection } from './atomics';
import { ChemistryCollection } from './chemistry';
import { ClassificationCollection } from './classification';
import { DescriptiveCollection } from './descriptive';
import { HazardCollection } from './hazard';
import { PhysicsCollection } from './physics';

// Chemical element symbols
export type ElementSymbol =
    'h' | 'he' | 'li' | 'be' | 'b' | 'c' | 'n' | 'o' | 'f' | 'ne' | 'na' | 'mg' | 'al' | 'si' |
    'p' | 's' | 'cl' | 'ar' | 'k' | 'ca' | 'sc' | 'ti' | 'v' | 'cr' | 'mn' | 'fe' | 'co' | 'ni' |
    'cu' | 'zn' | 'ga' | 'ge' | 'as' | 'se' | 'br' | 'kr' | 'rb' | 'sr' | 'y' | 'zr' | 'nb' |
    'mo' | 'tc' | 'ru' | 'rh' | 'pd' | 'ag' | 'cd' | 'in' | 'sn' | 'sb' | 'te' | 'i' | 'xe' |
    'cs' | 'ba' | 'la' | 'ce' | 'pr' | 'nd' | 'pm' | 'sm' | 'eu' | 'gd' | 'tb' | 'dy' | 'ho' |
    'er' | 'tm' | 'yb' | 'lu' | 'hf' | 'ta' | 'w' | 're' | 'os' | 'ir' | 'pt' | 'au' | 'hg' |
    'tl' | 'pb' | 'bi' | 'po' | 'at' | 'rn' | 'fr' | 'ra' | 'ac' | 'th' | 'pa' | 'u' | 'np' |
    'pu' | 'am' | 'cm' | 'bk' | 'cf' | 'es' | 'fm' | 'md' | 'no' | 'lr' | 'rf' | 'db' | 'sg' |
    'bh' | 'hs' | 'mt' | 'ds' | 'rg' | 'cn' | 'nh' | 'fl' | 'mc' | 'lv' | 'ts' | 'og';

// Collection of element properties
export type ElementCollection = Collection< {
    [ K in ElementSymbol ]: Collection< {
        atomics: AtomicsCollection;
        chemistry: ChemistryCollection;
        classification: ClassificationCollection;
        descriptive: DescriptiveCollection;
        hazard: HazardCollection;
        physics: PhysicsCollection;
    } >;
} >;
