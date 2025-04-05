
import React from 'react';
import Navbar from '../components/Navbar';
import VoiceUploader from '../components/VoiceUploader';
import VoiceRecorder from '../components/VoiceRecorder';
import Footer from '../components/Footer';

const DemoPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Try SweetVoice <span className="gradient-text">Demo</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-xl mx-auto">
            Experience our technology with two options: record your voice directly or upload an audio file.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Record Your Voice</h2>
                <p className="text-gray-600 mb-6">
                  Speak into your microphone and get instant analysis of your voice patterns.
                </p>
                <VoiceRecorder />
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Upload Audio File</h2>
                <p className="text-gray-600 mb-6">
                  Upload a pre-recorded voice sample in WAV or MP3 format for analysis.
                </p>
                <VoiceUploader />
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-center">Understanding Your Results</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Normal Range</h3>
                <div className="h-2 w-full bg-green-200 rounded-full mb-2"></div>
                <p className="text-gray-600">70-140 mg/dL indicates a normal glucose range.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Low</h3>
                <div className="h-2 w-full bg-red-200 rounded-full mb-2"></div>
                <p className="text-gray-600">Below 70 mg/dL may indicate hypoglycemia.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">High</h3>
                <div className="h-2 w-full bg-orange-200 rounded-full mb-2"></div>
                <p className="text-gray-600">Above 140 mg/dL may indicate hyperglycemia.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-voice-50 rounded-xl p-6 mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-center">Disclaimer</h2>
            <p className="text-gray-600 text-center">
              This demo provides simulated results for demonstration purposes only. 
              SweetVoice is not a medical device and should not replace regular blood glucose monitoring 
              methods prescribed by healthcare professionals.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DemoPage;
