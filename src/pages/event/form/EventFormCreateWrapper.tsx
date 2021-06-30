import React from 'react';
import { connect } from 'umi';
import EventForm from '@/pages/event/form/EventForm';
import { IEvent } from '@/pages/event/types';
import { get } from 'lodash';
import { ILoadingEffects } from '@/types';

interface IProps {
  create: (arg: IEvent) => void;
  loadingEffects: ILoadingEffects;
}

const EventFormCreateWrapper = (props: IProps) => {
  const onFinish = (values: IEvent) => {
    props.create(values);
  };

  const isLoading = get(props, 'loadingEffects.Event/create', false);

  return <EventForm onFinish={onFinish} submitButtonText="Create" isLoading={isLoading} />;
};

const mapStateToProps = (state: any) => ({
  loadingEffects: state.loading.effects,
});

const mapDispatchToProps = (dispatch: any) => ({
  create: (payload: IEvent) => dispatch({ type: 'Event/create', payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventFormCreateWrapper);
