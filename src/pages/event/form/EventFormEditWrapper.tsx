import React, { useEffect } from 'react';
import { connect, withRouter } from 'umi';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { get, isEmpty} from 'lodash';
import EventForm from '@/pages/event/form/EventForm';
import { IEvent } from '@/pages/event/types';
import { ILoadingEffects } from '@/types';

interface IProps {
  getById: (eventId: string) => void;
  reset: () => void;
  updateById: any;
  Event: IEvent;
  loadingEffects: ILoadingEffects;
}
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const EventFormEditWrapper = (props: IProps) => {
  const queryParams = get(props, 'location.query', {});
  const eventId: string = get(props, 'Sidepanel.eventId', '');
  const initialValues = get(props, 'Event.eventInfo', {});

  const isLoadingGet = get(props, 'loadingEffects.Event/getById', false);
  const isLoadingUpdate = get(props, 'loadingEffects.Event/updateById', false);

  useEffect(() => {
    props.getById(eventId);
  }, []);

  const onFinish = (values: IEvent) => {
    props.updateById({ values, eventId, queryParams });
  };

  if (isLoadingGet || isEmpty(initialValues)) return <Spin indicator={antIcon} />;

  return (
    <EventForm
      onFinish={onFinish}
      initialValues={initialValues}
      submitButtonText="Update"
      isLoading={isLoadingUpdate}
    />
  );
};

const mapStateToProps = (state: any) => ({
  Sidepanel: state.Sidepanel,
  Event: state.Event,
  loadingEffects: state.loading.effects,
});

const mapDispatchToProps = (dispatch: any) => ({
  reset: () => dispatch({ type: 'EventForm/reset' }),
  updateById: (payload: IEvent) => dispatch({ type: 'Event/updateById', payload }),
  getById: (payload: string) => dispatch({ type: 'Event/getById', payload }),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventFormEditWrapper));
