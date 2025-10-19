import { Query } from '../types/api';

export const query: Query = {
    $from: [ 'elements' ],
    $select: {
        elements: {
            classification: true,
            physics: {
                density: true,
                phase: true,
                temperature: true,
                heat: {
                    heatCapacity: false
                }
            },
            safety: {
                hazard: {
                    signalWord: true,
                    pictograms: true
                }
            }
        }
    },
    $where: {
        elements: {
            $and: [ {
                classification: {
                    block: { $in: [ 's', 'f' ] }
                },
                descriptive: {
                    registry: { echa: { $exists: true } },
                    properties: {
                        $includes: [ 'native', 'noble' ],
                        $excludes: [ 'rareEarths' ]
                    }
                }
            }, {
                physics: {
                    $or: [ {
                        density: { $gt: 200 }
                    }, {
                        enthalpy: {
                            atomizationEnthalpy: { $exists: true }
                        }
                    } ]
                }
            } ]
        }
    },
    $group: {
        groupBy: [
            [ 'elements', 'classification.period' ]
        ],
        aggregate: [
            [ 'elements', 'classification.symbol', 'count' ],
            [ 'elements', 'physics.density', 'avg' ]
        ]
    },
    $sort: [
        [ 'elements', 'classification.atomicNumber', 'asc' ]
    ],
    $limit: 50,
    $options: {
        resolveRefs: true,
        resolveUnits: true,
        units: {
            temperature: [ 'C' ]
        }
    }
};
