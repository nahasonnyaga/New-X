import React from "react";

interface Tweet {
  id: number;
  content: string;
  author: string;
  time: string;
}

const dummyTweets: Tweet[] = [
  {
    id: 1,
    content: "Hello world! This is my first tweet clone 🚀",
    author: "user1",
    time: "2m ago",
  },
  {
    id: 2,
    content: "Building with React and Tailwind is awesome!",
    author: "user2",
    time: "10m ago",
  },
];

const Feed: React.FC = () => {
  return (
    <div>
      {dummyTweets.map((tweet) => (
        <div key={tweet.id} className="bg-white p-4 rounded shadow mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold">{tweet.author}</span>
            <span className="text-gray-400 text-xs">{tweet.time}</span>
          </div>
          <p>{tweet.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
