/**
 * Element Descriptive Property Types
 */

import { Distinct, Group, LangGroup, MapPropertyDefinition, NumberProperty, PrimitiveProperty, Single } from '../property';

// Descriptive property names
export type DescriptivePropertyGroup = 'registry' | 'abundance' | 'discovery' | 'media';

export type DescriptiveProperty =
    'names' | 'appearance' | 'cas' | 'inChI' | 'inChIkey' | 'cid' | 'echa' | 'eg' | 'wikidata' |
    'rtecs' | 'universeAbundance' | 'sunAbundance' | 'meteoriteAbundance' | 'crustalAbundance' |
    'seaAbundance' | 'streamAbundance' | 'humanAbundance' | 'year' | 'discoverer' | 'country' |
    'era' | 'properties' | 'images' | 'spectrum' | 'price' | 'weblinks' | 'wiki';

// Collection of descriptive properties
export type DescriptiveCollection = MapPropertyDefinition< {
    names: LangGroup;
    appearance?: LangGroup;
    registry: Group< {
        cas: Single< PrimitiveProperty >;
        inChI: Single< PrimitiveProperty >;
        inChIkey: Single< PrimitiveProperty >;
        cid: Single< PrimitiveProperty >;
        echa?: Single< PrimitiveProperty >;
        eg?: Single< PrimitiveProperty >;
        wikidata?: Single< PrimitiveProperty >;
        rtecs?: Single< PrimitiveProperty >;
    } >;
    abundance?: Group< {
        universeAbundance?: Single< NumberProperty >;
        sunAbundance?: Single< NumberProperty >;
        meteoriteAbundance?: Single< NumberProperty >;
        crustalAbundance?: Single< NumberProperty >;
        seaAbundance?: Single< NumberProperty >;
        streamAbundance?: Single< NumberProperty >;
        humanAbundance?: Single< NumberProperty >;
    } >;
    discovery?: Group< {
        year?: Distinct< number >;
        discoverer?: Distinct< string >;
        country?: Distinct< string >;
        era?: Distinct< string >;
    } >;
    properties?: Distinct< (
        'antiquity' | 'artificial' | 'heavyMetal' | 'lightMetal' | 'mononuclide' | 'native' |
        'natural' | 'noble' | 'platinumMetal' | 'radioactive' | 'rareEarths' | 'refractorMetal' |
        'semiconductor' | 'stable' | 'synthetic' | 'vital'
    )[] >;
    media?: Group< {
        images?: Distinct< {
            url: string;
            caption: string;
            text?: string;
        }[] >;
        spectrum?: PrimitiveProperty;
    } >;
    price?: Single< NumberProperty >;
    weblinks?: Distinct< {
        url: string;
        text?: string;
        accessed?: string;
        archive?: string;
    }[] >;
    wiki?: LangGroup;
} >;
