
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-sweet-500 to-voice-600 flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-xl font-bold text-white">SweetVoice</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-md">
            SweetVoice is revolutionizing glucose monitoring with AI-powered voice analysis technology, making diabetes management simpler and pain-free.
          </p>
          <p className="text-gray-500 text-sm">© 2025 SweetVoice. All rights reserved.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-lg">Links</h3>
          <ul className="space-y-2">
            <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
            <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
            <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Early Access</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">info@sweetvoice.ai</li>
            <li className="text-gray-400">+1 (555) 123-4567</li>
            <li className="text-gray-400">123 Tech Lane, San Francisco, CA</li>
          </ul>
          
          <div className="mt-6">
            <h3 className="font-semibold mb-4 text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row justify-between text-gray-500 text-sm">
          <div>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p>SweetVoice is a demonstration project. Not for medical use.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
