import { get, patch, post, del, put } from '@/utils/httpMethods';
import { IEvent, IEventQueryParams } from '@/pages/event/types';

export async function queryEventCreate(payload: IEvent): Promise<any> {
  return post({ url: '/event', data: payload });
}

export async function queryEventGetById(id: string): Promise<any> {
  return get({ url: `/event/${id}` });
}

export async function queryEventUpdateById(payload: { eventId: string; values: IEvent }): Promise<any> {
  return patch({ url: `/event/${payload.eventId}`, data: payload.values });
}

export async function queryEventDeleteById(eventId: string): Promise<any> {
  return del({ url: `/event/${eventId}` });
}

export async function queryEventSearch(payload: IEventQueryParams): Promise<any> {
  return post({ url: '/event/search', data: payload });
}

export async function queryEventGetStats(): Promise<any> {
  return get({ url: `/event/stats` });
}

export async function queryEventSaveNewImage(payload: { eventId: string; data: object }): Promise<any> {
  return put({
    url: `/event/${payload.eventId}/image`,
    data: payload.data,
    type: 'multipart/form-data; boundary=<calculated when request is sent>',
  });
}
