import { PhysicalQuantity } from '../abstract/unit';

// Allow specifying units for different physical quantities
type UnitOptions = {
    [ U in PhysicalQuantity ]?: string[];
};

// Options for query execution
export type QueryOptions = {
    resolveRefs?: boolean;
    resolveUnits?: boolean;
    units?: UnitOptions;
};
