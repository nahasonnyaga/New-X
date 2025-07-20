import React, { useState } from 'react';
import './SidebarMenu.css';
import Menu from './Menu';

const SidebarMenu = () => {
  const [open, setOpen] = useState(false);

  // Example menu items
  const menuItems = [
    { icon: '🏠', label: 'Home', active: true },
    { icon: '🔍', label: 'Explore' },
    { icon: '🔔', label: 'Notifications' },
    { icon: '✉️', label: 'Messages' },
    { icon: '🔖', label: 'Bookmarks' }
  ];

  return (
    <>
      {/* Hamburger icon */}
      <button
        className="sidebar-hamburger"
        aria-label="Open sidebar menu"
        onClick={() => setOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Overlay */}
      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`sidebar-menu${open ? ' open' : ''}`}>
        <button
          className="sidebar-close"
          aria-label="Close sidebar menu"
          onClick={() => setOpen(false)}
        >
          &times;
        </button>
        <Menu items={menuItems} />
      </aside>
    </>
  );
};

export default SidebarMenu;
