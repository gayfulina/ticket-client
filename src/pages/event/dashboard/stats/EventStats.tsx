import React from 'react';
import { get, isEmpty } from 'lodash';
import { Col, Row, Statistic, Card } from 'antd';
import { IEventStats } from '@/pages/event/types';

interface IProps {
  stats: IEventStats;
}

const EventStats = (props: IProps) => {
  const eventStats = get(props, 'stats', '');

  // if (isEmpty(eventStats)) return null;

  const totalCount = get(eventStats, 'totalCount', '...');
  const totalCountDouble = get(eventStats, 'totalCountDouble', '...');
  const totalCountTriple = get(eventStats, 'totalCountTriple', '...');
  const totalCountTen = get(eventStats, 'totalCountTen', '...');

  return (
    <Row gutter={16}>
      <Col span={6}>
        <Statistic title="Total" value={totalCount} />
      </Col>

      <Col span={6}>
        <Statistic title="Trend" value={totalCountDouble} />
      </Col>

      <Col span={6}>
        <Statistic title="Users" value={totalCountTriple} />
      </Col>

      <Col span={6}>
        <Statistic title="Hits" value={totalCountTen} />
      </Col>
    </Row>
  );
};

export default EventStats;
