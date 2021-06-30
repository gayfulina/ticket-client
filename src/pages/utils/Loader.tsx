import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loader = () => {
  return <Spin indicator={loadingIcon} />;
};

export default Loader;
