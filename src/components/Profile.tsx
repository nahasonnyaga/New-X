import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="rounded-full w-16 h-16"
        />
        <div>
          <div className="font-bold text-lg">Jane Doe</div>
          <div className="text-gray-500">@janedoe</div>
        </div>
      </div>
      <div className="mt-4">
        <p>Bio: Frontend Developer. Lover of code and coffee!</p>
      </div>
    </div>
  );
};

export default Profile;
