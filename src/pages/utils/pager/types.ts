export interface IPager {
  pageCurrent: number;
  pageCount: number;
  limit: number;
  itemsCount: number;
  isFirst: boolean;
  isLast: boolean;
}
