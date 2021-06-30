import React from 'react';
import { Button, Form, Input } from 'antd';
import validator from '@/utils/validators';
import { IEvent } from '@/pages/event/types';
import { get } from 'lodash';

interface IProps {
  isLoading: boolean;
  onFinish: (values: any) => void;
  submitButtonText: string;
  initialValues?: IEvent;
}

const EventForm = (props: IProps) => {
  const isLoading = get(props, 'isLoading', false);

  return (
    <Form onFinish={props.onFinish} initialValues={props.initialValues}>
      <Form.Item name="name" rules={[validator.require]}>
        <Input placeholder="Event Name" />
      </Form.Item>

      <Form.Item name="price" rules={[validator.numbers]}>
        <Input placeholder="Event Price" />
      </Form.Item>

      <Form.Item name="description">
        <Input.TextArea placeholder="Event Description" autoSize={{ minRows: 3, maxRows: 6 }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          {props.submitButtonText}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
