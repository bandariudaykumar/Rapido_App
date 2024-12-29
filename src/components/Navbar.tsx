import React, { useState } from 'react';
import { Bike, User, Menu } from 'lucide-react';
import LoginModal from './auth/LoginModal';

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Bike className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-800">SwiftGo</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#rides" className="text-gray-600 hover:text-green-600">Book Ride</a>
              <a href="#features" className="text-gray-600 hover:text-green-600">Features</a>
              <a href="#rewards" className="text-gray-600 hover:text-green-600">Rewards</a>
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
              >
                <User className="h-5 w-5" />
                <span>Login</span>
              </button>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>
      </nav>
      
      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}