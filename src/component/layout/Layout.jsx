import React from 'react';
import Nav from '../home/Nav/Nav';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <div className='px-28'>
        <Nav />
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
