import { CollectionQuery, Query } from '../types/api';
import { DataBase } from '../types/database';
import { ElementCollection } from '../types/element';

// Example 1: Basic element query
type Example1 = Query< DataBase > & {
    elements: {
        symbol: { regex: '^[A-Z][a-z]?$' };
        atomicNumber: { between: [ 1, 36 ] };
        $select: [ 'symbol', 'classification.atomicNumber' ];
    };
};

// Example 2: Complex nested query
type Example2 = Query< DataBase > & {
    elements: {
        'classification.phase': { eq: 'solid' };
        'physics.density': { gt: 5 };
        'atomics.mass.atomicMass': { exists: true };
        $sort: { 'classification.atomicNumber': 1 };
        $limit: 10;
    };
};

// Example 3: Multiple collections
type Example3 = Query< DataBase > & {
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

// Example 4: Logical operators
type Example4 = CollectionQuery< ElementCollection[ 'h' ] > & {
    $or: [
        { 'classification.block': { eq: 's' } },
        { 'classification.block': { eq: 'p' } }
    ];
    'physics.temperature.meltingTemp': { lt: 300 };
};

// Example 5: Array operations
type Example5 = CollectionQuery< ElementCollection[ 'h' ] > & {
    'descriptive.properties': {
        elemMatch: { eq: 'radioactive' };
    };
    'atomics.ionization': { exists: true };
};
