import React, { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState("twitterlight");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "twitterlight" ? "twitterdark" : "twitterlight"
    );
  };

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-primary">
      {theme === "twitterlight" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;
