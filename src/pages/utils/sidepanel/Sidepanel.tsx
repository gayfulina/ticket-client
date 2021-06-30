import React from 'react';
import { connect } from 'umi';
import { get } from 'lodash';
import { Drawer } from 'antd';
import { ISidepanel } from '@/pages/utils/sidepanel/types';

import BaseFormCreateWrapper from '@/pages/base/form/BaseFormCreateWrapper';
import BaseFormEditWrapper from '@/pages/base/form/BaseFormEditWrapper';

import EventFormCreateWrapper from '@/pages/event/form/EventFormCreateWrapper';
import EventFormEditWrapper from '@/pages/event/form/EventFormEditWrapper';

interface IProps extends ISidepanel {
  Sidepanel: ISidepanel;
  close: () => void;
}

const Sidepanel = (props: IProps) => {
  const open = get(props, 'Sidepanel.open', false);
  const component = get(props, 'Sidepanel.component', '');
  const title = get(props, 'Sidepanel.title', '');
  const width = get(props, 'Sidepanel.width', 750);

  const components: any = {
    BaseFormCreate: <BaseFormCreateWrapper />,
    BaseFormEdit: <BaseFormEditWrapper />,

    EventFormCreate: <EventFormCreateWrapper />,
    EventFormEdit: <EventFormEditWrapper />,
  };

  const mapping = (c: string): any => {
    return components[c] || null;
  };

  const onCloseDrawer = () => {
    props.close();
  };

  return (
    <Drawer title={title} width={width} onClose={onCloseDrawer} visible={open}>
      {mapping(component)}
    </Drawer>
  );
};

const mapStateToProps = (state: any) => ({
  Sidepanel: state.Sidepanel,
});

const mapDispatchToProps = (dispatch: any) => ({
  close: () => dispatch({ type: 'Sidepanel/close' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidepanel);
