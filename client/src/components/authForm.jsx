import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm({ isLogin }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const endpoint = isLogin
      ? "https://rest-express-api-production.up.railway.app/api/auth/login"
      : "https://rest-express-api-production.up.railway.app/api/auth/signup";

    if (!isLogin && formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      setSuccess(`${isLogin ? "Login" : "Signup"} successful!`);
      setFormData({ email: "", password: "", confirmPassword: "" });

      // Redirect after delay (optional)
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {error && (
        <p className="text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded mb-4 text-sm">
          {error}
        </p>
      )}
      {success && (
        <p className="text-green-600 bg-green-100 border border-green-300 px-4 py-2 rounded mb-4 text-sm">
          {success}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="you@example.com"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Enter your password"
          />
          {isLogin && (
  <div className="text-right mt-2">
    <button
      onClick={() => navigate("/forgot-password")}
      type="button"
      className="text-sm text-pink-500 hover:underline"
    >
      Forgot Password?
    </button>
  </div>
)}

        </div>

        {/* Confirm Password (only on signup) */}
        {!isLogin && (
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Re-enter your password"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
