import React, { useState } from "react";

const AdminCreateAgent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
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
      //connect backend
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus(error);
    }
  };

  return (
    <div className="bg-gray-100 p-6 md:p-8 rounded-lg border border-gray-200 shadow-lg max-w-md mx-auto mt-20">
      <h3 className="text-xl font-bold text-black mb-6">Create Agent/User</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-black mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-600 rounded-lg px-4 py-2.5 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Name"
            required
          />
        </div>

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
            placeholder="Email"
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
            placeholder="Password"
            required
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-black mb-2">
            Role
          </label>
          <select id="role" name="role">
            <option value="agent">Agent</option>
            <option value="user">User</option>
          </select>
        </div>

        {submitStatus === "success" && (
          <div className="bg-gray-600 border border-green-700 text-green-400 px-4 py-3 rounded mb-6 flex items-start">
            <span>Ticket creation successful!</span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-gray-600 border border-red-700 text-red-400 px-4 py-3 rounded mb-6 flex items-start">
            <span>Ticket creation failed. Please try again.</span>
          </div>
        )}

        <div>
          <button
            type="submit"
            className={`w-full px-8 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 shadow-lg flex items-center justify-center`}
          >
            Create Agent/User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminCreateAgent;
