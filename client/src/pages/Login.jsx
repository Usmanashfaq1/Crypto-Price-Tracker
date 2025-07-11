import { useState } from "react";
import AuthForm from "../components/authForm";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-pink-100">
      {/* Header */}
      <header className="bg-pink-600 py-4 shadow-md text-center">
        <button className="bg-amber-100 text-pink-800 font-bold px-6 py-2 rounded-lg border border-amber-300 hover:bg-amber-200 transition text-xl">
          Crypto Price Tracker
        </button>
      </header>

      {/* Main Form Section */}
      <main className="flex flex-col justify-center items-center px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl mt-8 mb-12">
          <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          <AuthForm isLogin={isLogin} />

          <p className="text-sm mt-6 text-center text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-pink-500 font-medium hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pink-800 py-4 text-center">
        <button className="bg-amber-100 text-pink-800 font-bold px-6 py-2 rounded-lg border border-amber-300 hover:bg-amber-200 transition text-base">
          Crypto Price Tracker
        </button>
      </footer>
    </div>
  );
};

export default Login;
