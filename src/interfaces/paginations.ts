export interface Pagination<T> {
  content: T;
  currentPage: number;
  totalDocuments: number;
  totalPages: number;
  cacheable: boolean;
}
