
import React from 'react';
import { Mic, Brain, LineChart, Sparkles } from 'lucide-react';

const stepsData = [
  {
    icon: <Mic className="h-8 w-8 text-sweet-500" />,
    title: 'Voice Recording',
    description: 'Speak a simple phrase into your smartphone. SweetVoice captures subtle vocal biomarkers imperceptible to the human ear.',
  },
  {
    icon: <Brain className="h-8 w-8 text-sweet-600" />,
    title: 'AI Analysis',
    description: 'Our proprietary algorithms analyze hundreds of vocal parameters that correlate with blood glucose fluctuations.',
  },
  {
    icon: <LineChart className="h-8 w-8 text-voice-500" />,
    title: 'Glucose Estimation',
    description: 'Within seconds, receive an estimated glucose reading based on validated correlations between voice patterns and blood glucose.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-voice-600" />,
    title: 'Continuous Learning',
    description: 'The system learns from your personal data over time, becoming increasingly accurate with regular use.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How SweetVoice Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          SweetVoice uses advanced acoustic analysis and machine learning to detect the subtle ways glucose levels affect your voice.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stepsData.map((step, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-6 card-shadow transition-transform hover:translate-y-[-5px]"
          >
            <div className="bg-gradient-to-br from-sweet-50 to-voice-50 p-4 rounded-lg inline-block mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white rounded-xl p-8 card-shadow">
        <h3 className="text-2xl font-semibold mb-4">The Science Behind It</h3>
        <p className="text-gray-600 mb-4">
          Research has shown that blood glucose levels can affect vocal characteristics through changes in vocal tract tissues, muscle control, and neurological factors. SweetVoice analyzes these subtle changes to estimate glucose levels.
        </p>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="flex-1 border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">Voice Biomarkers</h4>
            <p className="text-gray-600">
              Changes in frequency, amplitude, jitter, shimmer, and harmonic-to-noise ratio are among the hundreds of parameters we analyze.
            </p>
          </div>
          <div className="flex-1 border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">Machine Learning</h4>
            <p className="text-gray-600">
              Our algorithms have been trained on thousands of voice samples correlated with verified blood glucose readings.
            </p>
          </div>
          <div className="flex-1 border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">Personalization</h4>
            <p className="text-gray-600">
              The system calibrates to your unique voice patterns, improving accuracy over time with regular use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
