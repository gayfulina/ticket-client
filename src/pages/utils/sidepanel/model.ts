import { Effect, Reducer } from 'umi';
import defaultReducers from '@/utils/defaultReducers';

export interface IState {}

export interface IModel {
  namespace: string;
  state: IState;
  effects: {
    close: Effect;
    open: Effect;
  };
  reducers: {
    save: Reducer<IState>;
    reset: Reducer<IState>;
  };
}

const Model: IModel = {
  namespace: 'Sidepanel',

  state: {
    open: false,
  },

  effects: {
    *close(_, { put }) {
      yield put({ type: 'reset' });
    },

    *open({ payload }, { put }) {
      yield put({ type: 'save', payload: { open: true, ...payload } });
    },
  },

  reducers: {
    ...defaultReducers,

    reset() {
      return {
        open: false,
      };
    },
  },
};

export default Model;
