
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const testimonialsData = [
  {
    quote: "SweetVoice has completely changed how I monitor my diabetes. No more painful finger pricks multiple times a day!",
    name: "Sarah Johnson",
    role: "Type 1 Diabetes Patient",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "As an endocrinologist, I'm impressed with the accuracy SweetVoice achieves. It helps my patients maintain better compliance with monitoring.",
    name: "Dr. Michael Chen",
    role: "Endocrinologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "The convenience of checking my glucose levels while on-the-go has been life-changing. SweetVoice gives me peace of mind.",
    name: "Robert Williams",
    role: "Pre-diabetic Patient",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Are Saying</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover how SweetVoice is making glucose monitoring easier for people around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <Card key={index} className="border-0 card-shadow">
            <CardContent className="p-6">
              <Quote className="text-sweet-300 mb-4" size={32} />
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-sweet-500 to-voice-600 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Join Our Early Access Program</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Be among the first to experience the future of glucose monitoring. Limited spots available.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white w-full sm:max-w-xs"
          />
          <button className="bg-white text-sweet-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
