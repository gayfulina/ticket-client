import React, { useEffect } from 'react';
import { connect, history } from 'umi';
import { get, omitBy } from 'lodash';
import Pager from '@/pages/utils/pager/Pager';
import { IEvent, IEventQueryParams } from '@/pages/event/types';
import EventSearchList from '@/pages/event/dashboard/search/EventSearchList';

const initialSearchForm = {
  eventSearchParam1: '',
  eventSearchParam2: '',
};

const initialSearchQuery = {
  limit: 20,
  page: 1,
  ...initialSearchForm,
};

interface IProps {
  eventGetStats: () => void;
  eventSearch: (arg: IEventQueryParams) => void;
  eventReset: () => void;
  EventDashboard: any;
}

const EventDashboard = (props: IProps) => {
  const eventList: IEvent[] = get(props, 'Event.eventList', []);
  const eventPager = get(props, 'Event.eventPager', {});
  const queryParams = get(props, 'location.query', {});

  const getSearchQuery = (mixin = {}) => {
    const query = { ...initialSearchQuery, ...queryParams, ...mixin };
    return omitBy(query, (a) => !a); // удалить пустые ключи
  };

  useEffect(() => {
    return () => {
      props.eventReset();
    };
  }, []);

  useEffect(() => {
    props.eventSearch(getSearchQuery());
  }, [queryParams]);

  const onPagerChange = (page: number) => {
    const query = getSearchQuery({ page });
    history.push({ query });
  };

  return (
    <>
      <EventSearchList items={eventList} queryParams={queryParams} />

      <Pager pager={eventPager} onChange={onPagerChange} />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  Event: state.Event,
});

const mapDispatchToProps = (dispatch: any) => ({
  eventSearch: (payload: IEventQueryParams) => dispatch({ type: 'Event/eventSearch', payload }),
  eventGetStats: () => dispatch({ type: 'Event/eventGetStats' }),
  eventReset: () => dispatch({ type: 'Event/reset' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);
