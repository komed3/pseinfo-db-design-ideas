import { Collection } from './abstract/collection';
import { ReferenceCollection } from './abstract/reference';
import { UnitCollection } from './abstract/unit';

// Root database type
export type DataBase = Collection< {
    element: {};
    units: UnitCollection;
    references: ReferenceCollection;
} >;
