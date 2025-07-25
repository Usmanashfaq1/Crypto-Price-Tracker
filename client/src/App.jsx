// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";


import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />   
     <Route path="/forgot-password" element={<ForgotPassword />} />
     <Route path="/reset-password/:token" element={<ResetPassword />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
      {/* if nothing else match then using this wild card route moving to login again */}
    </Routes>
  );
}

export default App;
