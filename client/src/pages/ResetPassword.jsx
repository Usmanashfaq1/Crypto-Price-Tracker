import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
     const res = await fetch(
  `https://rest-express-api-production.up.railway.app/api/auth/reset-password/${token}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }), // no need to send token in body
  }
);

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Password reset failed.");
      }

      setSuccess("Password reset successful! You can now log in.");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl p-8 rounded-xl max-w-md w-full space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-pink-600">
          Reset Password
        </h2>

        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}

        <input
          type="password"
          placeholder="New Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-400 focus:ring-2 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm New Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-400 focus:ring-2 outline-none"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
