import { Collection, Distinct, FormGroup, Group } from '../abstract/collection';
import { RangeValue, SingleValue } from '../abstract/value';

export type HazardCollection = Collection< FormGroup< {
    statements?: Group< {
        hazard?: Distinct< string[] >;
        precautionary?: Distinct< string[] >;
    } >;
    signal?: Distinct< 'danger' | 'warning' >;
    nfpa?: Distinct< {
        flammability: 0 | 1 | 2 | 3 | 4;
        health: 0 | 1 | 2 | 3 | 4;
        instability: 0 | 1 | 2 | 3 | 4;
        special?: 'W' | 'OX' | 'SA' | 'ACID' | 'ALK' | 'COR' | 'BIO' | 'RAC';
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
    toxicity?: Distinct< {
        type: 'EC50' | 'LC50' | 'LD50' | 'TD50' | 'LOAEL' | 'LOEL' | 'NOAEL' | 'NOEL';
        organism: string;
        value: SingleValue< 'massFraction' > | RangeValue< 'massFraction' >;
        application?: 'oral' | 'dermal' | 'inhalation' | 'intravenous' | 'intraperitoneal' | 'subcutaneous';
        duration?: string;
    }[] >;
} > >;
