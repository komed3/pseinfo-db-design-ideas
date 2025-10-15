import { Collection } from './abstract/collection';
import { ReferenceCollection } from './abstract/reference';
import { UnitCollection } from './abstract/unit';
import { ElementCollection } from './element';

// Root database type
export type DataBase = Collection< {
    element: ElementCollection;
    units: UnitCollection;
    references: ReferenceCollection;
} >;
