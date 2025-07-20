// src/components/TweetBox.tsx
import React, { useState } from "react";

const TweetBox = () => {
  const [tweet, setTweet] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tweet.trim()) return;
    alert(`Tweeted: ${tweet}`);
    setTweet("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg shadow-md">
      <textarea
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        placeholder="What's happening?"
        className="w-full p-2 bg-gray-900 rounded mb-2 border border-gray-700 text-white"
        rows={3}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Tweet
      </button>
    </form>
  );
};

export default TweetBox;
