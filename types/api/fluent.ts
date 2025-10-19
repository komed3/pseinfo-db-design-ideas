import { QueryFilter } from './filter';
import { QueryGroup } from './group';
import { QueryableCollection } from './helper';
import { QueryOptions } from './option';
import { Query } from './query';
import { QuerySelect } from './select';
import { QuerySort } from './sort';

// Fluent query interface with generics for each part of the query
export interface FluentQuery<
    From extends QueryableCollection[] = [],
    Select extends QuerySelect = {},
    Where extends QueryFilter = {},
    Group extends QueryGroup = { groupBy: [] },
    Sort extends QuerySort = [],
    Limit extends number | undefined = undefined,
    Offset extends number | undefined = undefined,
    Options extends QueryOptions = {}
> extends Query {
    $from: From;
    $select: Select;
    $where: Where extends {} ? Where : undefined;
    $group: Group extends { groupBy: [] } ? undefined : Group;
    $sort: Sort extends [] ? undefined : Sort;
    $limit: Limit extends number ? Limit : undefined;
    $offset: Offset extends number ? Offset : undefined;
    $options: Options extends {} ? Options : undefined;
}

// Fluent query builder interface
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

    // Method to add a collection to the query
    from < NewFrom extends QueryableCollection > ( collection: NewFrom ) : QueryBuilder<
        [ ...From, NewFrom ], Select, Where, Group, Sort, Limit, Offset, Options
    >;

    // Method to set the select fields of the query
    select < NewSelect extends QuerySelect > ( fields: NewSelect ) : QueryBuilder<
        From, NewSelect, Where, Group, Sort, Limit, Offset, Options
    >;

    // Method to set the where condition of the query
    where < NewWhere extends QueryFilter > ( condition: NewWhere ) : QueryBuilder<
        From, Select, NewWhere, Group, Sort, Limit, Offset, Options
    >;

    // Method to set the group by clause of the query
    groupBy < NewGroup extends QueryGroup > ( group: NewGroup ) : QueryBuilder<
        From, Select, Where, NewGroup, Sort, Limit, Offset, Options
    >;

    // Method to set the sort order of the query
    orderBy < NewSort extends QuerySort > ( sort: NewSort ) : QueryBuilder<
        From, Select, Where, Group, [ ...Sort, ...NewSort ], Limit, Offset, Options
    >;

    // Method to set the limit of the query
    limit < NewLimit extends number > ( limit: NewLimit ) : QueryBuilder<
        From, Select, Where, Group, Sort, NewLimit, Offset, Options
    >;

    // Method to set the offset of the query
    offset < NewOffset extends number > ( offset: NewOffset ) : QueryBuilder<
        From, Select, Where, Group, Sort, Limit, NewOffset, Options
    >;

    // Method to set additional query options
    options < NewOptions extends QueryOptions > ( options: NewOptions ) : QueryBuilder<
        From, Select, Where, Group, Sort, Limit, Offset, NewOptions
    >;

    // Method to enable or disable resolving references
    withResolvedRefs ( resolve?: boolean ) : QueryBuilder<
        From, Select, Where, Group, Sort, Limit, Offset, Options & { resolveRefs: boolean }
    >;

    // Method to enable or disable resolving units
    withResolvedUnits ( resolve?: boolean ) : QueryBuilder<
        From, Select, Where, Group, Sort, Limit, Offset, Options & { resolveUnits: boolean }
    >;

    // Method to build the final query object
    build () : FluentQuery< From, Select, Where, Group, Sort, Limit, Offset, Options >;

}
