import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Fake login (in real apps, do API call)
    localStorage.setItem("auth", "true");
    navigate("/");
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="bg-pink-500 text-center">
        <button className="text-4xl md:text-base bg-amber-50 m-4 border-2 p-1">
          <strong>Weaving Factory System</strong>
        </button>
      </header>

      <main className="flex flex-col justify-center items-center">
        <h1 className="text-6xl md:text-base font-bold mb-4">Login Page</h1>
        <button
          onClick={handleLogin}
          className=" text-5xl md:text-base  px-6 py-3 md:px-4 md:py-2 bg-pink-500 text-white  rounded"
        >
          Login
        </button>
      </main>

      <footer className="flex justify-center items-center bg-gray-700">
        <button className="text-5xl md:text-base bg-amber-50 m-4 border-2 p-1">
          <strong>Ibrahim Tex</strong>
        </button>
      </footer>
    </div>
  );
};

export default Login;
