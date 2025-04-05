
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, StopCircle, Loader } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [glucoseLevel, setGlucoseLevel] = useState<number | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);

  const startRecording = () => {
    setIsRecording(true);
    setGlucoseLevel(null);
    let timer = 0;
    const interval = setInterval(() => {
      timer += 1;
      setRecordingTime(timer);
      
      if (timer >= 5) {
        clearInterval(interval);
        stopRecording();
      }
    }, 1000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setIsAnalyzing(true);
    setRecordingTime(0);
    
    // Simulate analysis time
    setTimeout(() => {
      // Generate a random glucose level between 70 and 180
      const randomGlucose = Math.floor(Math.random() * (180 - 70 + 1) + 70);
      setGlucoseLevel(randomGlucose);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getGlucoseStatus = (level: number) => {
    if (level < 70) return { status: 'Low', color: 'text-red-500' };
    if (level > 180) return { status: 'High', color: 'text-red-500' };
    return { status: 'Normal', color: 'text-green-500' };
  };

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden border-0 card-shadow">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-2">Voice Analysis Demo</h3>
          <p className="text-gray-600">Say "Check my glucose" to analyze your voice pattern</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <div className={`w-32 h-32 rounded-full flex items-center justify-center ${isRecording ? 'voice-wave bg-voice-100' : 'bg-gray-100'}`}>
            {isRecording ? (
              <StopCircle size={48} className="text-voice-600 cursor-pointer" onClick={stopRecording} />
            ) : (
              <Mic size={48} className="text-gray-400" />
            )}
          </div>
          
          {isRecording && (
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span>Recording</span>
                <span>{recordingTime}s / 5s</span>
              </div>
              <Progress value={recordingTime * 20} className="h-2 bg-gray-200" />
            </div>
          )}

          {isAnalyzing ? (
            <div className="flex items-center gap-2 text-gray-600">
              <Loader className="animate-spin" size={20} />
              <span>Analyzing voice patterns...</span>
            </div>
          ) : null}

          {glucoseLevel !== null && !isAnalyzing && !isRecording ? (
            <div className="bg-gray-50 p-4 rounded-lg w-full">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Estimated Glucose:</span>
                <div className="flex flex-col items-end">
                  <span className="text-2xl font-bold">{glucoseLevel} mg/dL</span>
                  <span className={getGlucoseStatus(glucoseLevel).color}>
                    {getGlucoseStatus(glucoseLevel).status}
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                *This is a simulation. Actual results would be calibrated to your voice pattern.
              </p>
            </div>
          ) : null}

          {!isRecording && (
            <Button 
              onClick={startRecording} 
              className="gradient-bg text-white hover:opacity-90 transition-opacity w-full"
              disabled={isAnalyzing}
            >
              {isAnalyzing ? 'Analyzing...' : 'Start Recording'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceRecorder;
