export interface IBase {
  _id: string;
  name: string;
  owner: {
    name: string;
    _id: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface IBaseStats {
  totalBase: number;
  todayBase: number;
  monthBase: number;
  averageBase: number;
}

export interface IBaseQueryParams {
  limit?: number | string;
  page?: number | string;
  baseSearchParam1?: string;
  baseSearchParam2?: string;
}
