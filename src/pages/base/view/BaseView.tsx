import React, { useEffect } from 'react';
import { connect } from 'umi';
import { get } from 'lodash';

interface IProps {
  baseId: string;
  name: string;
  baseGetById: (id: string) => void;
}

const BaseView = (props: IProps) => {
  const baseId = get(props, 'match.params.baseId');
  const name = get(props, 'BaseView.name', '');

  console.log(props);

  useEffect(() => {
    props.baseGetById(baseId);
  }, []);

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  BaseView: state.BaseView,
});

const mapDispatchToProps = (dispatch: any) => ({
  baseGetById: (payload: string) => dispatch({ type: 'BaseView/baseGetById', payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseView);
