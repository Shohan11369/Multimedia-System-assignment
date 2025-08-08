import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      navigate("/quiz");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAF4F4]">
      <form
        onSubmit={handleLogin}
        className="bg-[#EAF4F4] p-8 rounded shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600">Log In</h2>

        {/* Username Field */}
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        {/* Password Field with Show/Hide */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 text-sm text-gray-500 hover:text-gray-700"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Strong password hint */}
        <p className="text-xs text-gray-500 -mt-2">Use a strong password</p>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-700"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
