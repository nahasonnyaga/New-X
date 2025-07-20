import React, { useState } from 'react';
import './SidebarMenu.css';

const SidebarMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Toggle Button */}
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        {open ? 'Close Menu' : 'Open Menu'}
      </button>
      
      {/* Sidebar Menu */}
      <nav className={`sidebar-menu ${open ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>Notifications</li>
          <li>Profile</li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarMenu;
