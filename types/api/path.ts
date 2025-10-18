import { Paths } from '../abstract/utils';
import { DataBase } from '../database';

// Generate all possible dot-separated paths in the DataBase type
export type DataBasePaths = Paths< DataBase >;
