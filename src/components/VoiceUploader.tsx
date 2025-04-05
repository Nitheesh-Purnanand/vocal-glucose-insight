
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader, Upload, Volume2, FileAudio } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const VoiceUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [glucoseLevel, setGlucoseLevel] = useState<number | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setGlucoseLevel(null);
      
      // Create audio element for preview
      const audioURL = URL.createObjectURL(selectedFile);
      const audioElement = new Audio(audioURL);
      setAudio(audioElement);
      
      audioElement.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }
  };

  const togglePlayback = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const analyzeAudio = () => {
    if (!file) return;
    
    setIsAnalyzing(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
    
    // Simulate analysis time
    setTimeout(() => {
      // Generate a random glucose level between 70 and 180
      const randomGlucose = Math.floor(Math.random() * (180 - 70 + 1) + 70);
      setGlucoseLevel(randomGlucose);
      setIsAnalyzing(false);
      clearInterval(interval);
      setUploadProgress(100);
    }, 2500);
  };

  const getGlucoseStatus = (level: number) => {
    if (level < 70) return { status: 'Low', color: 'text-red-500' };
    if (level > 140) return { status: 'High', color: 'text-orange-500' };
    return { status: 'Normal', color: 'text-green-500' };
  };

  return (
    <Card className="w-full border-0 card-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="w-full">
            <label 
              htmlFor="audio-file" 
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-2 text-gray-500" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">WAV or MP3 (max. 5MB)</p>
              </div>
              <Input
                id="audio-file"
                type="file"
                accept="audio/wav,audio/mp3,audio/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
          
          {file && (
            <div className="w-full bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <FileAudio className="mr-2 text-gray-600" size={20} />
                  <span className="text-sm font-medium truncate max-w-[180px]">
                    {file.name}
                  </span>
                </div>
                <Button
                  variant="ghost" 
                  size="sm"
                  onClick={togglePlayback}
                  className="h-8 w-8 p-0"
                >
                  <Volume2 className={isPlaying ? "text-voice-600" : "text-gray-600"} size={20} />
                </Button>
              </div>
              {uploadProgress > 0 && uploadProgress < 100 && (
                <Progress value={uploadProgress} className="h-1.5 mb-2" />
              )}
            </div>
          )}

          {isAnalyzing ? (
            <div className="flex items-center gap-2 text-gray-600">
              <Loader className="animate-spin" size={20} />
              <span>Analyzing audio file...</span>
            </div>
          ) : null}

          {glucoseLevel !== null && !isAnalyzing ? (
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

          <Button 
            onClick={analyzeAudio} 
            className="gradient-bg text-white hover:opacity-90 transition-opacity w-full"
            disabled={!file || isAnalyzing}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Audio'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceUploader;
