
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-28 pb-16 px-4 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Monitor Glucose Levels with Just Your 
            <span className="gradient-text"> Voice</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            SweetVoice uses advanced AI to analyze subtle vocal changes, offering a non-invasive alternative to traditional glucose monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="gradient-bg text-white hover:opacity-90 transition-opacity text-lg py-6 px-8">
              Try Demo
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button variant="outline" className="border-sweet-500 text-sweet-600 hover:bg-sweet-50 transition-colors text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-voice-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-sweet-100 rounded-full blur-3xl opacity-60"></div>
            <div className="relative glass-card rounded-xl overflow-hidden card-shadow animate-float">
              <img 
                src="https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=500&q=80" 
                alt="Voice analysis for glucose monitoring" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-semibold">Painless. Accurate. Revolutionary.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
