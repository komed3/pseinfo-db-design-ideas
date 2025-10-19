import { QueryFilter } from './filter';
import { QueryGroup } from './group';
import { QueryableCollection } from './helper';
import { QueryOptions } from './option';
import { QuerySelect } from './select';
import { QuerySort } from './sort';

export interface FluentQueryBuilder<
    From extends QueryableCollection[] = [],
    Select extends QuerySelect = {},
    Where extends QueryFilter = {},
    Group extends QueryGroup = { groupBy: [] },
    Sort extends QuerySort = [],
    Limit extends number | undefined = undefined,
    Offset extends number | undefined = undefined,
    Options extends QueryOptions = {}
> {}
