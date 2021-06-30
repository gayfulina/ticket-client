import { Effect, Reducer } from 'umi';
import { get } from 'lodash';
import defaultReducers from '@/utils/defaultReducers';

import { queryEventSearch } from '@/pages/event/queries';

export interface IState {}

export interface IModel {
  namespace: string;
  state: IState;
  effects: {
    eventSearch: Effect;
    open: Effect;
  };
  reducers: {
    save: Reducer<IState>;
    set: Reducer<IState>;
  };
}

const Model: IModel = {
  namespace: 'SearchInput',

  state: {},

  effects: {
    *eventSearch({ payload }, { call, put }) {
      const data = yield call(queryEventSearch, payload);
      yield put({
        type: 'save',
        payload: {
          event: {
            list: get(data, 'payload.items'),
          },
        },
      });
    },

    *open({ payload }, { put }) {
      yield put({ type: 'save', payload: { open: true, ...payload } });
    },
  },

  reducers: {
    ...defaultReducers,
  },
};

export default Model;
