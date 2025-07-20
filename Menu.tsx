import React from 'react';
import './Menu.css';

interface MenuItem {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => (
  <nav className="menu">
    <ul>
      {items.map((item, idx) => (
        <li key={item.label} className={item.active ? 'active' : ''}>
          <a href="#">
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
