import React, { useState } from 'react';

const Register = () => {
  const [step, setStep] = useState(1); 
  const [formData, setFormData] = useState({
    fullName: '',
    schoolCode: '',
    email: '',
    mobile: '',
    password: '',
  });
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!formData.fullName.trim()) return setError('Full name is required');
    if (!formData.schoolCode.trim()) return setError('School code is required');
    if (!/^\d{10}$/.test(formData.mobile)) return setError('Enter valid 10-digit mobile number');
    if (!/\S+@\S+\.\S+/.test(formData.email)) return setError('Enter valid email');
    if (formData.password.length < 6) return setError('Password must be at least 6 characters');

    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

        {/* Header */}
        <div className="bg-indigo-600 px-8 py-6 text-center">
          <h2 className="text-2xl font-bold text-white">
            {step === 1 ? 'Create Account' : 'Verify Mobile Number'}
          </h2>
          <p className="mt-2 text-indigo-100 text-sm">
            {step === 1
              ? 'Please fill the details to register'
              : `OTP sent to +91 ${formData.mobile}`}
          </p>
        </div>

  {/* Step 1 - Registration Form */}
        {step === 1 && (
          <form onSubmit={handleSubmitRegister} className="p-8 space-y-5">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-r text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                placeholder="John Doe"
                required
              />
            </div>

   <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                School Code
              </label>
              <input
                type="text"
                name="schoolCode"
                value={formData.schoolCode}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                placeholder="SCH12345"
                required
              />
     </div>

      <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email ID
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                placeholder="example@school.com"
                required
              />
       </div>

        <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-4 py-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-500">
                  +91
                </span>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  placeholder="9876543210"
                  maxLength={10}
                  required
                />
              </div>
     </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Sending OTP...' : 'Send OTP →'}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{' '}
              <a href="/login" className="text-indigo-600 hover:underline font-medium">
                Login
              </a>
            </p>
          </form>
        )}

        {/* Step 2 - OTP Verification */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="p-8 space-y-6">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded text-sm">
                {error}
              </div>
            )}

            <div className="text-center">
              <p className="text-gray-600 mb-4">Enter 6-digit OTP</p>
              <div className="flex justify-center gap-3 sm:gap-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                    className="w-12 h-12 sm:w-14 sm:h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition bg-white"
                    autoComplete="off"
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
            >
              Verify & Register
            </button>

            <div className="text-center text-sm">
              <p className="text-gray-600">
                Didn't receive OTP?{' '}
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="text-indigo-600 hover:underline font-medium"
                >
                  Resend OTP
                </button>
              </p>
              <p className="mt-2 text-gray-500">
                You can request a new OTP in 30 seconds
              </p>
            </div>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-center text-indigo-600 hover:text-indigo-800 font-medium mt-2"
            >
              ← Change mobile number
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;