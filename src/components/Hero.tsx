import React, { useState } from 'react';
import { ArrowRight, Leaf, Clock, Shield } from 'lucide-react';
import BookRideModal from './booking/BookRideModal';
import BecomeRiderModal from './rider/BecomeRiderModal';

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isRiderOpen, setIsRiderOpen] = useState(false);

  return (
    <>
      <div className="pt-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Quick, Safe & <span className="text-green-600">Eco-friendly</span> Rides
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Experience the future of urban mobility with SwiftGo. Book instant bike rides, earn green rewards, and contribute to a cleaner environment.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
                >
                  <span>Book Now</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setIsRiderOpen(true)}
                  className="flex items-center justify-center space-x-2 border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-colors"
                >
                  <span>Become a Rider</span>
                </button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">Quick Pickup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">Safe Rides</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">Eco-friendly</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80"
                alt="Bike rider"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">5000+ Active Riders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookRideModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      
      <BecomeRiderModal 
        isOpen={isRiderOpen}
        onClose={() => setIsRiderOpen(false)}
      />
    </>
  );
}