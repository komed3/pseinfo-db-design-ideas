import { QueryFilter } from './filter';
import { QueryGroup } from './group';
import { QueryableCollection } from './helper';
import { QueryOptions } from './option';
import { QuerySelect } from './select';
import { QuerySort } from './sort';

export interface QueryBuilder<
    From extends QueryableCollection[] = [],
    Select extends QuerySelect = {},
    Where extends QueryFilter = {},
    Group extends QueryGroup = { groupBy: [] },
    Sort extends QuerySort = [],
    Limit extends number | undefined = undefined,
    Offset extends number | undefined = undefined,
    Options extends QueryOptions = {}
> {

    from < NewFrom extends QueryableCollection > ( collection: NewFrom ) : QueryBuilder<
        [ ...From, NewFrom ], Select, Where, Group, Sort, Limit, Offset, Options
    >;

    select < NewSelect extends QuerySelect > ( fields: NewSelect ) : QueryBuilder<
        From, NewSelect, Where, Group, Sort, Limit, Offset, Options
    >;

    where < NewWhere extends QueryFilter > ( condition: NewWhere ) : QueryBuilder<
        From, Select, NewWhere, Group, Sort, Limit, Offset, Options
    >;

}
