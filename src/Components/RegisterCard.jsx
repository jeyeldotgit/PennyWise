import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import logo1 from './../assets/images/logo1.png';

function RegisterCard() {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // State to manage errors
  const [errors, setErrors] = useState({});

  // Hook for navigation
  const navigate = useNavigate();

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting normally
    const newErrors = {}; // Object to store errors

    // Simple validation
    if (!formData.username.trim()) newErrors.username = 'Username is required.';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email address.';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters.';

    setErrors(newErrors); // Set the validation errors

    // If no errors, simulate successful registration
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully:', formData);

      // Simulate successful registration and redirect
      setTimeout(() => {
        alert('Registration successful! Redirecting to login...');
        navigate('/Login'); // Redirect to the login page
      }, 500);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-3xl shadow-lg pt-6 pb-8 w-full max-w-md">
        <div className="flex justify-center mt-0">
          <img src={logo1} className="w-[90px]" alt="Logo" />
        </div>
        <div className="max-w-full">
          <h2
            className="text-4xl font-black text-center mb-4 font-poppins"
            style={{ color: '#363062' }}
          >
            Sign up to continue
          </h2>
        </div>
        <p className="text-center text-sm font-extrabold text-[#818fb4] mb-0 mt-0 font-poppins mx-20">
          Track, plan, and reach your financial goals your way
        </p>
        <form
          className="p-14 pt-6 mx-6 text-lg font-medium text-[#818fb4]"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 font-inter flex flex-col space-y-4 max-w-sm m-auto">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border-b border-[#363062] focus:outline-none text-gray-900 py-2"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-[#363062] focus:outline-none text-gray-900 py-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-b border-[#363062] focus:outline-none text-gray-900 py-2"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full mb-0 mt-2 py-3 bg-[#363062] text-[#f5f4e6] font-inter font-bold rounded-3xl hover:outline focus:ring-1"
          >
            Sign up
          </button>
        </form>
        <p className="text-center font-poppins font-bold text-[#818fb4] -mt-6">
          Already a member?{' '}
          <a href="/login" className="text-black hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterCard;