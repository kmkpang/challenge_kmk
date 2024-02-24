export interface BaseMainRecord {
  createdAt: string | Date | null;
  updatedAt: string | Date | null;
  id: string;
}
export interface BaseSubRecord {
  created_at: string | Date | null;
  updated_at: string | Date | null;
  deleted_at: string | Date | null;
  id: string;
}

export interface PaginationType<T> {
  data: T;
  page: number;
  per_page: number;
  total: number;
  total_page: number;
}

export type ModalMode = "add" | "edit";
export type Align = "center" | "start" | "end";

export interface TableHeaderType<T> {
  title: string;
  align: Align;
  sortable: boolean;
  width?: string;
  key?: keyof T | "";
}

export interface ResponseDataType<T> {
  result: ResultType;
  data: T;
}
export interface ResponseListDataType<T> {
  result: ResultType;
  data: T[];
}
export interface ResponseListDataPaginationType<T> {
  result: ResultType;
  data: T[];
  page: number;
  per_page: number;
  total: number;
  total_page: number;
}
export interface ResultType {
  code: string; // "0000" | "500"
  message: string;
}
