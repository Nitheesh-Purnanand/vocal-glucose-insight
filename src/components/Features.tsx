
import React from 'react';
import { Activity, Clock, Smartphone, TrendingUp, Heart, Bell } from 'lucide-react';

const featuresData = [
  {
    icon: <Activity size={32} className="text-sweet-500" />,
    title: "Non-invasive Monitoring",
    description: "Monitor glucose levels without needles or blood samples - just speak into your phone."
  },
  {
    icon: <Clock size={32} className="text-voice-500" />,
    title: "Quick Results",
    description: "Get glucose estimations within seconds rather than minutes required by traditional methods."
  },
  {
    icon: <Smartphone size={32} className="text-sweet-600" />,
    title: "Mobile Convenience",
    description: "Check your levels anywhere with just your smartphone - no additional equipment needed."
  },
  {
    icon: <TrendingUp size={32} className="text-voice-600" />,
    title: "Trend Analysis",
    description: "Track your glucose patterns over time with detailed analytics and insights."
  },
  {
    icon: <Heart size={32} className="text-sweet-500" />,
    title: "Pain-Free Experience",
    description: "Eliminate the discomfort associated with finger pricks and blood sampling."
  },
  {
    icon: <Bell size={32} className="text-voice-500" />,
    title: "Customizable Alerts",
    description: "Set personalized notifications for potential high or low glucose readings."
  }
];

const Features = () => {
  return (
    <section id="features" className="section">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SweetVoice</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our innovative approach to glucose monitoring offers unique advantages over traditional methods.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-6 border border-gray-100 card-shadow transition-all hover:border-sweet-200"
          >
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold mb-6">Ready to try a better way to monitor glucose?</h3>
        <button className="gradient-bg text-white py-3 px-8 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
          Join the Waitlist
        </button>
      </div>
    </section>
  );
};

export default Features;
