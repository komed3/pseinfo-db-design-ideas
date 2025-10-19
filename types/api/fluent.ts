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

    groupBy < NewGroup extends QueryGroup > ( group: NewGroup ) : QueryBuilder<
        From, Select, Where, NewGroup, Sort, Limit, Offset, Options
    >;

    orderBy < NewSort extends QuerySort > ( sort: NewSort ) : QueryBuilder<
        From, Select, Where, Group, NewSort, Limit, Offset, Options
    >;

    limit < NewLimit extends number > ( limit: NewLimit ) : QueryBuilder<
        From, Select, Where, Group, Sort, NewLimit, Offset, Options
    >;

    offset < NewOffset extends number > ( offset: NewOffset ) : QueryBuilder<
        From, Select, Where, Group, Sort, Limit, NewOffset, Options
    >;

}
