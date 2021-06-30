import { Effect, history, Reducer } from 'umi';

import {
  queryEventCreate,
  queryEventDeleteById,
  queryEventGetById,
  queryEventGetStats,
  queryEventSaveNewImage,
  queryEventSearch,
  queryEventUpdateById,
} from '@/pages/event/queries';
import defaultReducers from '@/utils/defaultReducers';
import { get } from 'lodash';

export interface IState {}

export interface EventModelType {
  namespace: string;
  state: IState;
  effects: {
    create: Effect;
    getById: Effect;
    updateById: Effect;
    eventSearch: Effect;
    eventDeleteById: Effect;
    eventGetStats: Effect;
    eventSaveNewImage: Effect;
    reset: Effect;
  };
  reducers: {
    save: Reducer<IState>;
  };
}

const initialState = {};

const EventModel: EventModelType = {
  namespace: 'Event',

  state: initialState,

  effects: {
    *create({ payload }, { call, put }) {
      yield call(queryEventCreate, payload);
      yield put({ type: 'Event/eventSearch' });
      yield put({ type: 'Sidepanel/close' });
      history.push('/');
    },

    *getById({ payload }, { call, put }) {
      yield put({ type: 'save', payload: { eventInfo: {} } });
      const data = yield call(queryEventGetById, payload);
      yield put({ type: 'save', payload: { eventInfo: data.payload } });
    },

    *updateById({ payload }, { call, put }) {
      yield call(queryEventUpdateById, payload);
      yield put({ type: 'Sidepanel/close' });
      yield put({ type: 'Event/eventSearch', payload: payload.queryParams });
    },

    *eventSearch({ payload }, { call, put }) {

      console.log(payload)
      yield put({ type: 'save', payload: { eventList: [], eventPager: [] } });
      const data = yield call(queryEventSearch, payload);
      yield put({
        type: 'save',
        payload: {
          eventList: get(data, 'payload.items'),
          eventPager: get(data, 'payload.pager'),
        },
      });
    },

    *eventDeleteById({ payload }, { call, put }) {
      console.log(payload.queryParams)
      yield call(queryEventDeleteById, payload.eventId);
      yield put({ type: 'eventSearch', payload: payload.queryParams });
    },

    *eventGetStats(_, { call, put }) {
      const data = yield call(queryEventGetStats);
      yield put({
        type: 'save',
        payload: { eventStats: data.payload },
      });
    },

    *eventSaveNewImage({ payload }, { call, put }) {
      yield call(queryEventSaveNewImage, payload);
      yield put({ type: 'eventGetById', payload: payload.eventId });
    },

    *reset(_, { put }) {
      yield put({ type: 'save', payload: initialState });
    },
  },

  reducers: {
    ...defaultReducers,
  },
};

export default EventModel;
