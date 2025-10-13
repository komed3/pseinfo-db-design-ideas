/**
 * Element Hazard Property Types
 */

import { Distinct, MapPropertyDefinition } from '../property';

export type HazardCollection = MapPropertyDefinition< {
    statements?: {
        hazard?: Distinct< string[] >;
        precautionary?: Distinct< string[] >;
    };
    signal?: Distinct< 'danger' | 'warning' >;
    nfpa?: {
        flammability?: Distinct< number >;
        health?: Distinct< number >;
        instability?: Distinct< number >;
        special?: Distinct< string >;
    };
    pictograms?: Distinct< (
        'explosive' | 'flammable' | 'oxidizing' | 'compressedGas' | 'corrosive' | 'toxic' |
        'harmful' | 'healthHazard' | 'environmentalHazard'
    )[] >;
    classes?: {
        ghs?: Distinct< ( '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' )[] >;
        adr?: Distinct< (
            '1' | '1.4' | '1.5D' | '1.6N' | '2.1' | '2.2' | '2.3' | '3' | '4.1' | '4.2' |
            '4.3' | '5.1' | '5.2' | '6.1' | '6.2' | '7A' | '7B' | '7C' | '7E' | '8' | '9' |
            '9A' | 'HOT' | 'POL'
        )[] >;
    };
} >;
