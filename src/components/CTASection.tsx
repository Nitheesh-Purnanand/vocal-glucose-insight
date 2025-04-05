
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section">
      <div className="bg-gradient-to-br from-voice-50 to-sweet-50 rounded-2xl p-10 card-shadow relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-64 h-64 bg-voice-200 rounded-full blur-3xl opacity-40 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sweet-200 rounded-full blur-3xl opacity-40 transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Future of Glucose Monitoring
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl">
            SweetVoice is currently in clinical trials. Join our waitlist to be among the first to experience this revolutionary technology when it's available.
          </p>
          
          <div className="w-full max-w-lg">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sweet-500"
              />
              <Button className="gradient-bg text-white hover:opacity-90 transition-opacity">
                Join Waitlist
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              By joining, you agree to receive updates about SweetVoice. We respect your privacy and will never share your information.
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold gradient-text">94%</span>
              <p className="text-gray-600 text-sm">User Satisfaction</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold gradient-text">90%</span>
              <p className="text-gray-600 text-sm">Correlation Accuracy</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold gradient-text">5 sec</span>
              <p className="text-gray-600 text-sm">Analysis Time</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold gradient-text">1000+</span>
              <p className="text-gray-600 text-sm">Beta Testers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
