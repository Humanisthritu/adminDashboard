'use client'
import React, { useState } from 'react';
import { BsShop } from 'react-icons/bs';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineKey } from 'react-icons/md';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
              <BsShop className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">BoroBazar</span>
          </div>

          {/* Login/Sign Up Links */}
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              LOGIN
            </button>
            <button className="px-6 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          {/* Lock Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <RiLockPasswordLine className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                <MdOutlineKey className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Header Text */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              Forgot Password
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Enter your registered email address and we'll send you a One-Time Password (OTP) to reset your password.
            </p>
          </div>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400"
                  placeholder="Email Id"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3.5 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl uppercase tracking-wide"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Check your email</h3>
              <p className="text-sm text-gray-600">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-emerald-500 hover:text-emerald-600 font-medium text-sm"
              >
                Try another email
              </button>
            </div>
          )}

          {/* Back to Login Link */}
          {!isSubmitted && (
            <div className="mt-6 text-center">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Back to{' '}
                <span className="text-emerald-500 hover:text-emerald-600 font-medium">
                  Login
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}