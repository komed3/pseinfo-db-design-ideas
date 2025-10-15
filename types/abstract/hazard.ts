import {} from './collection';

// Hazard signal words
export const SignalWord = [ 'danger', 'warning' ] as const;
export type SignalWord = ( typeof SignalWord )[ number ];

// GHS pictograms
export const GHSPictogram = [
    'explosive', 'flammable', 'oxidizing', 'compressedGas', 'corrosive',
    'toxic', 'harmful', 'healthHazard', 'environmentalHazard'
] as const;

export type GHSPictogram = ( typeof GHSPictogram )[ number ];

// GHS hazard classes
export const GHSClass = [ '01', '02', '03', '04', '05', '06', '07', '08', '09' ] as const;
export type GHSClass = ( typeof GHSClass )[ number ];

// ADR hazard classes
export const ADRClass = [
    '1', '1.4', '1.5D', '1.6N', '2.1', '2.2', '2.3', '3', '4.1', '4.2',
    '4.3', '5.1', '5.2', '6.1', '6.2', '7A', '7B', '7C', '7E', '8', '9',
    '9A', 'HOT', 'POL'
] as const;

export type ADRClass = ( typeof ADRClass )[ number ];

// Hazard statements
export type HStatement = `H${ '2' | '3' | '4' | '5' }${ string }`;
export type PStatement = `P${ '1' | '2' | '3' | '4' | '5' }${ string }`;
export type EUHStatement = `EUH${ '0' | '2' | '3' | '4' }${ string }`;

// NFPA 704 standard
export type NFPA = {
    flammability: 0 | 1 | 2 | 3 | 4;
    health: 0 | 1 | 2 | 3 | 4;
    instability: 0 | 1 | 2 | 3 | 4;
    special?: 'W' | 'OX' | 'SA' | 'ACID' | 'ALK' | 'COR' | 'BIO' | 'RAC';
};
