
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 md:px-12 bg-white/90 backdrop-blur-sm z-50 fixed top-0 left-0 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-sweet-500 to-voice-600 flex items-center justify-center">
            <span className="text-white font-bold">S</span>
          </div>
          <span className="text-xl font-bold gradient-text">SweetVoice</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-gray-700 hover:text-sweet-600 transition-colors">How It Works</a>
          <a href="#features" className="text-gray-700 hover:text-sweet-600 transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-700 hover:text-sweet-600 transition-colors">Testimonials</a>
          <Button 
            className="gradient-bg text-white hover:opacity-90 transition-opacity"
          >
            Early Access
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
          <a 
            href="#how-it-works" 
            className="text-gray-700 hover:text-sweet-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#features" 
            className="text-gray-700 hover:text-sweet-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-700 hover:text-sweet-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <Button 
            className="gradient-bg text-white hover:opacity-90 transition-opacity w-full"
          >
            Early Access
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
