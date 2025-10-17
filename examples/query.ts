import { Query } from '../types/api';

// Example 1: Basic element query
type Example1 = Query & {
    elements: {
        symbol: { regex: '^[A-Z][a-z]?$' };
        atomicNumber: { between: [ 1, 36 ] };
        $select: [ 'symbol', 'classification.atomicNumber' ];
    };
};

// Example 2: Complex nested query
type Example2 = Query & {
    elements: {
        'classification.phase': { eq: 'solid' };
        'physics.density': { gt: 5 };
        'atomics.mass.atomicMass': { exists: true };
        $sort: { 'classification.atomicNumber': 1 };
        $limit: 10;
    };
};

// Example 3: Multiple collections
type Example3 = Query & {
    elements: {
        'classification.radioactive': true;
        $select: [ 'classification.symbol', 'classification.atomicNumber' ];
    };
    references: {
        _type: { eq: 'article' };
        year: { gte: 2000 };
    };
    $include: [ 'elements', 'references' ];
};
