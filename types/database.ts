import { Collection } from './abstract/collection';
import { ReferenceCollection } from './abstract/reference';
import { QuantityCollection } from './abstract/unit';
import { ElementCollection } from './element';

// Root database type
export type Database = Collection< {
    element: ElementCollection;
    metaData: Collection< {
        references: ReferenceCollection;
        units: QuantityCollection;
    } >;
} >;
