import React from 'react';
import Sidepanel from '@/pages/utils/sidepanel/Sidepanel';
import Navbar from '@/layout/Navbar';

import '@/styles/styles.scss';
import '@/styles/nprogress.css';

interface IProps {
  children: any;
}

export default (props: IProps) => {
  return (
    <div className="container">
      <Navbar />
      <div>{props.children}</div>
      <Sidepanel />
    </div>
  );
};
