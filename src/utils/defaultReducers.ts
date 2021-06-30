const defaultReducers = {
  save(state: any, { payload }: any) {
    return {
      ...state,
      ...payload,
    };
  },

  set(state: any, { payload }: any) {
    return payload;
  },
};

export default defaultReducers;
