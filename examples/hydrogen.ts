import { ElementCollection } from '../types/element';

// @ts-expect-error
export const hydrogen: ElementCollection = {
    h: {
        classification: {
            symbol: 'H',
            atomicNumber: 1,
            block: 's',
            column: 1,
            group: 1,
            period: 1,
            radioactive: false,
            set: 'nonMetal',
            phase: 'gaseous',
            naturalOccurrence: 'primordial',
            goldschmidt: 'atmophile',
            superconductivity: 'none'
        },
        descriptive: {
            registry: {
                cas: '12385-13-6',
                cid: '783',
                echa: '100.014.187',
                eg: '215-605-7',
                wikidata: 'Q556',
                rtecs: 'RTECSMW8900000'
            },
            identifier: {
                inChI: 'InChI=1S/H',
                inChIkey: 'InChIKey=YZCKVEUIGOORGS-UHFFFAOYSA-N'
            },
            names: {
                en: 'Hydrogen',
                la: 'Hydrogenium',
                de: 'Wasserstoff'
            }
        },
        forms: {
            dihydrogen: {
                type: 'molecular',
                formula: 'H{2}',
                properties: {
                    descriptive: {
                        registry: {
                            cas: '1333-74-0',
                            cid: '783',
                            eg: '215-605-7',
                            wikidata: 'Q3027893'
                        },
                        identifier: {
                            inChI: 'InChI=1S/H2/h1H',
                            inChIkey: 'InChIKey=UFHFLCQGNIYNRP-UHFFFAOYSA-N',
                            smiles: '[HH]'
                        },
                        names: {
                            en: 'Dihydrogen',
                            de: 'Molekularer Wasserstoff'
                        }
                    }
                }
            }
        }
    }
} as const;
