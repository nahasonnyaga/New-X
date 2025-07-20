import React from "react";

const trends = [
  { topic: "#ReactJS", tweets: "120K" },
  { topic: "#TypeScript", tweets: "80K" },
  { topic: "#TailwindCSS", tweets: "60K" },
];

const Trends: React.FC = () => (
  <div className="bg-white p-4 rounded shadow mb-4">
    <h2 className="font-bold mb-3">Trends for you</h2>
    <ul>
      {trends.map((trend) => (
        <li key={trend.topic} className="mb-2">
          <span className="font-medium">{trend.topic}</span>
          <span className="text-gray-500 ml-2">{trend.tweets} Tweets</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Trends;
