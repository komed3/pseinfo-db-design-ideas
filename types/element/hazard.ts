import { Collection, Distinct, FormGroup, Group } from '../abstract/collection';

export type HazardCollection = Collection< FormGroup< {
    statements?: Group< {
        hazard?: Distinct< string[] >;
        precautionary?: Distinct< string[] >;
    } >;
    signal?: Distinct< 'danger' | 'warning' >;
    nfpa?: Distinct< {
        flammability: number;
        health: number;
        instability: number;
        special: string;
    } >;
    pictograms?: Distinct< (
        'explosive' | 'flammable' | 'oxidizing' | 'compressedGas' | 'corrosive' | 'toxic' |
        'harmful' | 'healthHazard' | 'environmentalHazard'
    )[] >;
    classes?: Group< {
        ghs?: Distinct< ( '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' )[] >;
        adr?: Distinct< (
            '1' | '1.4' | '1.5D' | '1.6N' | '2.1' | '2.2' | '2.3' | '3' | '4.1' | '4.2' |
            '4.3' | '5.1' | '5.2' | '6.1' | '6.2' | '7A' | '7B' | '7C' | '7E' | '8' | '9' |
            '9A' | 'HOT' | 'POL'
        )[] >;
    } >;
} > >;
