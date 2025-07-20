// src/components/Login.tsx
import React, { useState } from "react";
import { signIn } from "../lib/supabase"; // adjust path

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await signIn(email, password);
    if (error) alert(error.message);
    else window.location.reload(); // reload to trigger user fetch
  };

  return (
    <form onSubmit={handleLogin} className="p-8 max-w-sm mx-auto">
      <h2 className="text-2xl mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="block w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign In
      </button>
    </form>
  );
};

export default Login;
