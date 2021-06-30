import React, { useEffect } from 'react';
import { connect } from 'umi';
import { get } from 'lodash';
import { ISidepanel } from '@/pages/utils/sidepanel/types';

interface IProps {
  eventId: string;
  name: string;
  eventGetById: (id: string) => void;
  addImage: (id: string, image: object) => void;
  open: (arg: ISidepanel) => void;
}

const EventView = (props: IProps) => {
  const eventId = get(props, 'match.params.eventId');
  const name = get(props, 'Event.eventInfo.name', '');
  const image = get(props, 'Event.eventInfo.image', '');
  const description = get(props, 'Event.eventInfo.description', '');
  const price = get(props, 'Event.eventInfo.price', '');

  useEffect(() => {
    props.eventGetById(eventId);
  }, [eventId]);

  return (
    <div className="row">
      <div className="col-md-4">
        <img className='mb-4 img-fluid' src={image} alt={'Event'} />
      </div>

      <div className="col-md-8">
        <h1>{name}</h1>
        <strong>Price ${price}</strong>
        <hr />
        {description}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  Event: state.Event,
});

const mapDispatchToProps = (dispatch: any) => ({
  eventGetById: (eventId: string) => dispatch({ type: 'Event/getById', payload: eventId }),
  addImage: (eventId: string, data: object) =>
    dispatch({ type: 'Event/eventSaveNewImage', payload: { eventId, data } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventView);
