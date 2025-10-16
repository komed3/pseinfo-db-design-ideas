import { Collection } from './abstract/collection';
import { ReferenceCollection } from './abstract/reference';
import { UnitCollection } from './abstract/unit';
import { ElementCollection } from './element';

// Root database type
export type DataBase = Collection< {
    elements: ElementCollection;
    references: ReferenceCollection;
    units: UnitCollection;
} >;
