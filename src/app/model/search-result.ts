import {User} from './user';

export interface SearchResult {
  results: User[];
  page: number;
  pageSize: number;
  allResults: number;
  searchTerm: string;

}
