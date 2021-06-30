import React from 'react';
import { get } from 'lodash';

import { IEvent, IEventQueryParams } from '@/pages/event/types';
import ActionMenu from '@/pages/event/dashboard/search/ActionMenu';
import { Link } from 'umi';

interface IProps {
  items: IEvent[];
  queryParams: IEventQueryParams
}

const EventSearchList = (props: IProps) => {
  const queryParams = get(props, 'queryParams', {});
  const items: IEvent[] = get(props, 'items', []);

  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-xl-3 col-lg-4 col-sm-6 mb-4" key={item._id}>
          <div className="card">
            <Link to={`/event/${item._id}`}>
              <img src={item.image} className="card-img-top" alt="" />
            </Link>

            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/event/${item._id}`}>{item.name}</Link>
              </h5>

              <div>Price: ${item.price}</div>

              <p className="card-text small text-black-50">{item.description}</p>

              <ActionMenu item={item} queryParams={queryParams} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventSearchList;
