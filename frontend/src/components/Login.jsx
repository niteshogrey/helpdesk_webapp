import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //login logic
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus(error);
    }
  };

  return (
    <div className="bg-gray-100 p-6 md:p-8 rounded-lg border border-gray-200 shadow-lg max-w-md mx-auto mt-20">
      <h3 className="text-xl font-bold text-black mb-6">Login</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-black mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-600 rounded-lg px-4 py-2.5 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your email"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-black mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-600 rounded-lg px-4 py-2.5 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your password"
            required
          />
        </div>

        {submitStatus === "success" && (
          <div className="bg-gray-600 border border-green-700 text-green-400 px-4 py-3 rounded mb-6 flex items-start">
            <span>Login successful!</span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-gray-600 border border-red-700 text-red-400 px-4 py-3 rounded mb-6 flex items-start">
            <span>Login failed. Please try again.</span>
          </div>
        )}

        <div>
          <button
            type="submit"
            className={`w-full px-8 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 shadow-lg flex items-center justify-center`}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
