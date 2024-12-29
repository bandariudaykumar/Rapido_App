import React from 'react';
import { MapPin, Clock, Leaf, CreditCard, Shield, Gift } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="h-6 w-6 text-green-600" />,
    title: 'Smart Location Tracking',
    description: 'Real-time tracking and optimal route suggestions for faster rides'
  },
  {
    icon: <Clock className="h-6 w-6 text-green-600" />,
    title: 'Quick Pickup',
    description: 'Get picked up within minutes of booking your ride'
  },
  {
    icon: <Leaf className="h-6 w-6 text-green-600" />,
    title: 'Eco Rewards',
    description: 'Earn green points for every ride and redeem exciting rewards'
  },
  {
    icon: <CreditCard className="h-6 w-6 text-green-600" />,
    title: 'Flexible Payments',
    description: 'Multiple payment options including cash and digital wallets'
  },
  {
    icon: <Shield className="h-6 w-6 text-green-600" />,
    title: 'Safe Rides',
    description: 'Verified riders and real-time safety features for peace of mind'
  },
  {
    icon: <Gift className="h-6 w-6 text-green-600" />,
    title: 'Referral Benefits',
    description: 'Invite friends and earn rewards on their first rides'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose SwiftGo</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of convenience, safety, and sustainability with our innovative features
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}