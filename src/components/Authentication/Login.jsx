import React, { useState } from "react";
import { motion } from "framer-motion";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  // Email validation regex (basic format)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error
    setLoading(true); // Start loading

    // Validate email format
    if (!email || !emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Validate password (not empty)
    if (!password) {
      setError("Password is required.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert("Login successful! Redirecting to dashboard...");
        window.location.href = "/dashboard"; // Redirect to Dashboard
      } else {
        setError(data.message || "Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[rgb(8,25,72)] bg-cover bg-center">
      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative backdrop-blur-md"
        style={{ backgroundColor: "rgb(247, 199, 226)" }} // Pale pink background
      >
        <div className="shadow-lg rounded-md p-8 flex flex-col md:flex-row w-full max-w-4xl mx-4 md:mx-0">
          {/* Right Section - Welcome Message */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="md:w-1/2 text-center md:text-left p-6 text-black font-bold"
          >
            <h1 className="text-3xl mb-4">Welcome Back!</h1>
            <p className="text-sm text-gray-700">
              Login to your account and continue your journey with us.
            </p>
          </motion.div>

          {/* Left Section - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            className="md:w-1/2 p-6"
          >
            <h2 className="text-2xl mb-4 text-black font-bold">Login</h2>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-black font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-2 px-4 py-2 border border-black bg-white/10 rounded-md text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-black font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full mt-2 px-4 py-2 border border-black bg-white/10 rounded-md text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className={`w-full ${
                  loading ? "bg-gray-500 cursor-not-allowed" : "bg-pink-500 hover:bg-pink-700"
                } text-white p-2 rounded-md transition font-bold`}
                disabled={loading} // Disable button while loading
              >
                {loading ? "Logging in..." : "Login"}
              </motion.button>
            </form>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="text-sm text-black mt-4 text-center font-bold"
            >
              Don't have an account?{" "}
              <a href="/Signup" className="text-[rgba(246,59,187,0.8)] font-bold">
                Sign up here
              </a>
            </motion.p>

            {/* Forgot Password Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.5 }}
              className="mt-4 text-center"
            >
              <a href="/ForgotPassword" className="text-[rgba(246,59,187,0.8)] font-bold hover:underline">
                Forgot Password?
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;