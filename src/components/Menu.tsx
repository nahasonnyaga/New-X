// src/components/Menu.tsx
import React from "react";
import { Home, Hash, Bell, User, LogOut } from "lucide-react";
import { supabase } from "../utils/supabaseClient";

const items = [
  { name: "Home", icon: <Home size={20} /> },
  { name: "Explore", icon: <Hash size={20} /> },
  { name: "Notifications", icon: <Bell size={20} /> },
  { name: "Profile", icon: <User size={20} /> },
];

const Menu = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
      alert("Failed to log out");
    } else {
      window.location.replace("/login"); // or replace("/") if your homepage handles auth
    }
  };

  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item.name}
          className="flex items-center gap-2 cursor-pointer hover:text-twitter"
        >
          {item.icon}
          <span>{item.name}</span>
        </li>
      ))}
      <li
        onClick={handleLogout}
        className="flex items-center gap-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 px-4 py-2 rounded cursor-pointer"
      >
        <LogOut size={20} />
        <span>Log out</span>
      </li>
    </ul>
  );
};

export default Menu;

