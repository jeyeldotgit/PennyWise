import React, { useState } from 'react';
import logo5 from '../assets/images/logo5.png';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!formData.username || !formData.password) {
      setErrorMessage('Both fields are required!');
      return;
    }

    setErrorMessage('');

    // Simulate login process (you can replace this with an actual API call)
    console.log('Logging in with:', formData);

    // Example: Navigate to another page on successful login
    // Replace the console log with real authentication logic
  };

  return (
    <div className="min-h-screen w-full flex items-center fixed-inset-0 bg-[#435585] pl-14">
      <div className="w-full max-w-sm bg-transparent pl-20 mb-12">
        <h1 className="text-6xl font-black mb-6 font-poppins text-[#f5e8c7] text-center p-2">
          PennyWise
        </h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleInputChange}
            className="mb-6 ml-0 p-4 text-lg pr-20 font-inter text-[#818fb4] border-2 border-[#f5e8c7] rounded-2xl outline-none hover:bg-[#272249] bg-[#363062]"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mb-6 ml-0 p-4 text-lg pr-20 border-2 font-inter text-[#818fb4] border-[#f5e8c7] rounded-2xl outline-none hover:bg-[#272249] bg-[#363062]"
          />
          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
          )}
          <p className="font-inter mb-6 text-[#f5e8c7] text-center mt-0 ml-5 pl-6 text-[16px] hover:underline">
            <a href="">Forgot Password?</a>
          </p>
          <button
            type="submit"
            className="w-64 ml-10 p-8 text-center bg-[#f5e8c7]  shadow-black shadow-2xl text-[#363062] text-xl font-inter py-1 px-6 rounded-2xl hover:outline hover:outline-[#363062] hover:outline-3"
          >
            LOGIN
          </button>
        </form>
        <p className="font-inter mb-6 text-[#f5e8c7] text-center mt-0 ml-5 pl-6 text-sm p-4 pt-8">
          Don't have an account?{' '}
          <a className="hover:underline" href="">
            Sign Up
          </a>
        </p>
      </div>
      <div className="absolute right-60 transform scale-150">
        <img src={logo5} className="" alt="PennyWise Logo" />
      </div>
    </div>
  );
}

export default Login;
