import React, { useState } from 'react';
import { Select } from 'antd';
import { connect } from 'umi';
import { debounce, get } from 'lodash';
import { IEvent, IEventQueryParams } from '@/pages/event/types';
import { ILoadingEffects } from '@/types';
import { history } from '@@/core/history';

const { Option } = Select;

interface IProps {
  inputSearch: (searchParams: IEventQueryParams) => void;
  eventListSearch: (searchParams: IEventQueryParams) => void;
  loadingEffects: ILoadingEffects;
  SearchInput: any;
  onChange?: (value: string) => void;
  name?: string;
  value?: {
    name: string;
  };
  disabled?: boolean;
}

const EventSearchInput = (props: IProps) => {
  const [value, setValue] = useState('');

  const name = get(props, 'value.name', '');
  const disabled = get(props, 'disabled', false);

  const isLoading = get(props, 'loadingEffects.SearchInput/eventSearch', false);

  const list: IEvent[] = get(props, 'SearchInput.event.list', []);

  const onFocus = () => {
    props.inputSearch({});
  };

  const onSearch = debounce((value) => {
    if (value) props.inputSearch({ name: value });
  }, 500);

  const onSelect = (id = '') => {
    history.push(`/event/${id}`);
    setValue('');
  };

  const onInputKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      history.push(`/?name=${e.target.value}`);
    }
  };

  const options = list.map((el: IEvent) => (
    <Option key={el._id} value={el._id} className="d-flex">
      <div>
        <img className="w-40px me-2" src={el.image} />
      </div>
      <div>
        <div className="fw-bold ">{el.name}</div>
        <div>${el.price}</div>
      </div>
    </Option>
  ));

  return (
    <Select
      style={{ width: '100%', marginRight: '3rem' }}
      defaultActiveFirstOption={false}
      disabled={disabled}
      value={value}
      showSearch
      filterOption={false}
      defaultValue={name}
      placeholder="Select Event"
      optionFilterProp="children"
      onFocus={onFocus}
      onSearch={onSearch}
      onSelect={onSelect}
      onInputKeyDown={onInputKeyDown}
      loading={isLoading}
    >
      {options}
    </Select>
  );
};

const mapStateToProps = (state: any) => ({
  SearchInput: state.SearchInput,
  loadingEffects: state.loading.effects,
});

const mapDispatchToProps = (dispatch: any) => ({
  inputSearch: (payload: IEventQueryParams) => dispatch({ type: 'SearchInput/eventSearch', payload }),
  eventListSearch: (payload: IEventQueryParams) => dispatch({ type: 'Event/eventSearch', payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventSearchInput);
