// src/EducationManagement/pages/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/education-management/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Column - Login Form */}
 {/* Left Column - Login Form */}
<div className="flex-1 flex flex-col px-6 py-4 bg-white"> {/* Reduced py-8 to py-4 */}
  <div className="max-w-md w-full mx-auto mt-8 space-y-6"> {/* Added mt-8 for top margin instead of centering */}
    {/* Header - Further reduced spacing */}
    <div className="text-center">
      <div className="mx-auto w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-3 shadow-lg"> {/* Smaller logo */}
        <span className="text-white font-bold text-xl">E</span> {/* Smaller text */}
      </div>
      <p className="text-sm text-gray-600 mb-1">Education Management System</p> {/* Smaller text */}
      <p className="text-xs text-gray-500">
        Sign in to access your institution's portal
      </p>
    </div>

    {/* Login Form - Further reduced margin top */}
    <form className="mt-6 space-y-6" onSubmit={handleLogin}> {/* Reduced mt-8 to mt-6 */}
      <div className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
            Username or Email
          </label>
          <input
            id="username"
            name="username"
            type="text"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            placeholder="Enter your username or email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            placeholder="Enter your password"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500 transition duration-200">
            Forgot password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transition duration-200 transform hover:scale-105"
        >
          Sign In to Portal
        </button>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500 transition duration-200">
            Contact system administrator
          </a>
        </p>
      </div>
    </form>

    {/* Demo Notice - Further reduced margin top */}
    <div className="mt-4 bg-yellow-50 rounded-lg p-3 text-center border border-yellow-200"> {/* Reduced mt-6 to mt-4 */}
      <p className="text-sm text-yellow-800">
        <strong>Demo Access:</strong> Click "Sign In to Portal" to explore the system
      </p>
    </div>
  </div>
</div>
      {/* Right Column - Information Section */}
      <div className="flex-1 bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center px-12 py-12">
        <div className="max-w-lg text-white space-y-8">
          {/* Welcome Message */}
          <div className="text-center">
            <h3 className="text-5xl font-bold mb-4">Welcome to</h3>
            <h2 className="text-6xl font-bold mb-6">EMS</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full"></div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-lg">🎓</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Comprehensive Student Management</h4>
                <p className="text-blue-100 leading-relaxed">
                  Streamline student enrollment, attendance, and academic records in one centralized platform.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-lg">📊</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Advanced Analytics</h4>
                <p className="text-blue-100 leading-relaxed">
                  Gain valuable insights with real-time reports and performance analytics for informed decision-making.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-lg">🤝</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Parent-Teacher Collaboration</h4>
                <p className="text-blue-100 leading-relaxed">
                  Enhance communication between educators and parents with seamless messaging and progress updates.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-lg">⚡</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Automated Workflows</h4>
                <p className="text-blue-100 leading-relaxed">
                  Reduce administrative workload with automated grading, scheduling, and notification systems.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-blue-400">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-blue-100 text-sm">Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-blue-100 text-sm">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">99%</div>
              <div className="text-blue-100 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;