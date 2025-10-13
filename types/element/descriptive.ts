/**
 * Element Descriptive Property Types
 */

import { Distinct, Group, LangGroup, MapPropertyDefinition, NumberProperty, Single } from '../property';

// Descriptive property group names
export type DescriptivePropertyGroup = 'abundance' | 'discovery';

export type DescriptiveProperty =
    'names' | 'appearance' | 'universeAbundance' | 'sunAbundance' | 'meteoriteAbundance' |
    'crustalAbundance' | 'seaAbundance' | 'streamAbundance' | 'humanAbundance' | 'year' |
    'discoverer' | 'country' | 'era' | 'weblinks' | 'wiki';

// Collection of descriptive properties
export type DescriptiveCollection = MapPropertyDefinition< {
    names: LangGroup;
    appearance: LangGroup;
    abundance: Group< {
        universeAbundance: Single< NumberProperty >;
        sunAbundance: Single< NumberProperty >;
        meteoriteAbundance: Single< NumberProperty >;
        crustalAbundance: Single< NumberProperty >;
        seaAbundance: Single< NumberProperty >;
        streamAbundance: Single< NumberProperty >;
        humanAbundance: Single< NumberProperty >;
    } >;
    discovery: Group< {
        year: Distinct< number >;
        discoverer: Distinct< string >;
        country: Distinct< string >;
        era: Distinct< string >;
    } >;
    weblinks: Distinct< {
        url: string;
        text?: string;
        accessed?: string;
        archive?: string;
    }[] >;
    wiki: LangGroup;
} >;
