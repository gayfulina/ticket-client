import React from 'react';
import { connect } from 'umi';
import { Button } from 'antd';
import { ISidepanel } from '@/pages/utils/sidepanel/types';

interface IProps {
  open: (arg: ISidepanel) => void;
}

const BaseDashboardControls = (props: IProps) => {
  const baseCreate = () => {
    props.open({
      title: 'Create new Base',
      component: 'BaseFormCreate',
      place: 'BaseDashboard',
      width: 800,
    });
  };

  return (
    <Button type="primary" onClick={baseCreate}>
      Create Base
    </Button>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  open: (payload: ISidepanel) => dispatch({ type: 'Sidepanel/open', payload }),
});

export default connect(null, mapDispatchToProps)(BaseDashboardControls);
