import { Collection } from '../abstract/collection';
import { FormCollection } from '../abstract/form';
import { DeepPartial } from '../abstract/utils';

// List of all element symbols from the periodic table
export const ElementSymbol = [
    'h', 'he', 'li', 'be', 'b', 'c', 'n', 'o', 'f', 'ne', 'na', 'mg', 'al', 'si', 'p', 's',
    'cl', 'ar', 'k', 'ca', 'sc', 'ti', 'v', 'cr', 'mn', 'fe', 'co', 'ni', 'cu', 'zn', 'ga',
    'ge', 'as', 'se', 'br', 'kr', 'rb', 'sr', 'y', 'zr', 'nb', 'mo', 'tc', 'ru', 'rh', 'pd',
    'ag', 'cd', 'in', 'sn', 'sb', 'te', 'i', 'xe', 'cs', 'ba', 'la', 'ce', 'pr', 'nd', 'pm',
    'sm', 'eu', 'gd', 'tb', 'dy', 'ho', 'er', 'tm', 'yb', 'lu', 'hf', 'ta', 'w', 're', 'os',
    'ir', 'pt', 'au', 'hg', 'tl', 'pb', 'bi', 'po',	'at', 'rn', 'fr', 'ra', 'ac', 'th', 'pa',
    'u', 'np', 'pu', 'am', 'cm', 'bk', 'cf', 'es', 'fm', 'md', 'no', 'lr', 'rf', 'db', 'sg',
    'bh', 'hs', 'mt', 'ds', 'rg', 'cn', 'nh', 'fl', 'mc', 'lv', 'ts', 'og'
] as const;

// Type representing any valid element symbol
export type ElementSymbol = ( typeof ElementSymbol )[ number ];

// Type for a single element entry (all properties)
type SingleElement = Collection< {
    // not yet implemented
} >;

// Collection type for all elements, indexed by their symbol
export type ElementCollection = {
    [ K in ElementSymbol ]: SingleElement & {
        forms?: FormCollection< DeepPartial< SingleElement > >;
    };
};
