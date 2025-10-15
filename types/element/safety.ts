import { Collection } from '../abstract/collection';
import { Hazard } from '../abstract/hazard';
import { Toxicity } from '../abstract/helper';

export type SafetyCollection = Collection< {
    hazard?: Hazard;
    toxicity?: Toxicity;
} >;
