import { useEffect, useState } from "react";
import { getCurrentUser } from "./lib/supabase"; // adjust path
import Login from "./components/Login";
import Menu from "./components/Menu";
import TweetBox from "./components/TweetBox";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Trends from "./components/Trends";

const App: React.FC = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser().then(({ data }) => {
      setUser(data?.user || null);
    });
  }, []);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-1/4 border-r bg-white min-h-screen">
        <Menu />
      </aside>
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-xl mt-8">
          <TweetBox />
          <Feed />
        </div>
      </main>
    </div>
  );
};

export default App;
