export interface IEvent {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;

  createdAt: string;
  updatedAt: string;
}

export interface IEventStats {
  totalEvent: number;
  todayEvent: number;
  monthEvent: number;
  averageEvent: number;
}

export interface IEventQueryParams {
  limit?: number | string;
  page?: number | string;
  name?: string;
}
