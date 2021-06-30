import React from 'react';
import { Link } from 'umi';
import EventDashboardControls from '@/pages/event/dashboard/controls/EventDashboardControls';
import EventSearchInput from '@/pages/event/searchInput/EventSearchInput';

const Navbar = () => {
  return (
    <div className="mt-3 mb-3">
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/" className="me-3">
          TRAININGS
        </Link>

        <EventSearchInput />

        <EventDashboardControls />
      </div>
    </div>
  );
};

export default Navbar;
