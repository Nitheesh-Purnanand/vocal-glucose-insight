
import React from 'react';
import VoiceRecorder from './VoiceRecorder';

const DemoSection = () => {
  return (
    <section className="py-20 px-4 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience It Yourself
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Try our interactive demo to see how SweetVoice analyzes vocal patterns to estimate glucose levels. This simulation demonstrates the core technology behind our application.
            </p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How To Use The Demo</h3>
              <ol className="space-y-3 text-white/90">
                <li className="flex gap-3">
                  <span className="bg-white/20 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                  <span>Click "Start Recording" to begin</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-white/20 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                  <span>Speak clearly for 5 seconds</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-white/20 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                  <span>Wait for the analysis to complete</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-white/20 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                  <span>See your simulated glucose results</span>
                </li>
              </ol>
              <p className="mt-4 text-sm text-white/70">
                Note: This is a simulated demonstration. The actual SweetVoice application would include calibration for accurate personal results.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <VoiceRecorder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
