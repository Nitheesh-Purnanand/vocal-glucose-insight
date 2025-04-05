
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      this.classList.toggle('open');
    });
  }

  // Voice Recorder Functionality
  const recordButton = document.getElementById('recording-button');
  const startRecordingBtn = document.getElementById('start-recording');
  const recordingStatus = document.getElementById('recording-status');
  const recordingProgress = document.getElementById('recording-progress');
  const recordingTime = document.getElementById('recording-time');
  const analyzing = document.getElementById('analyzing');
  const resultCard = document.getElementById('result-card');
  const glucoseValue = document.getElementById('glucose-value');
  const glucoseStatus = document.getElementById('glucose-status');
  
  let isRecording = false;
  let recordingInterval;
  let seconds = 0;
  
  function startRecording() {
    isRecording = true;
    seconds = 0;
    resultCard.classList.add('hidden');
    recordButton.classList.add('recording');
    recordingStatus.textContent = 'Recording...';
    recordingProgress.classList.remove('hidden');
    startRecordingBtn.textContent = 'Stop Recording';
    
    recordingInterval = setInterval(() => {
      seconds++;
      recordingTime.textContent = `${seconds}s / 5s`;
      
      // Update progress bar
      const progressFill = document.getElementById('progress-fill');
      progressFill.style.width = `${seconds * 20}%`;
      
      if (seconds >= 5) {
        stopRecording();
      }
    }, 1000);
  }
  
  function stopRecording() {
    isRecording = false;
    clearInterval(recordingInterval);
    recordButton.classList.remove('recording');
    recordingStatus.textContent = 'Recording stopped';
    recordingProgress.classList.add('hidden');
    startRecordingBtn.textContent = 'Start Recording';
    
    // Show analyzing state
    analyzing.classList.remove('hidden');
    
    // Simulate analysis process
    setTimeout(() => {
      analyzing.classList.add('hidden');
      showResults();
    }, 2000);
  }
  
  function showResults() {
    // Generate random glucose level between 70 and 180
    const randomGlucose = Math.floor(Math.random() * (180 - 70 + 1) + 70);
    glucoseValue.textContent = `${randomGlucose} mg/dL`;
    
    // Set status based on value
    if (randomGlucose < 70) {
      glucoseStatus.textContent = 'Low';
      glucoseStatus.className = 'glucose-status low';
    } else if (randomGlucose > 140) {
      glucoseStatus.textContent = 'High';
      glucoseStatus.className = 'glucose-status high';
    } else {
      glucoseStatus.textContent = 'Normal';
      glucoseStatus.className = 'glucose-status normal';
    }
    
    resultCard.classList.remove('hidden');
  }
  
  if (startRecordingBtn) {
    startRecordingBtn.addEventListener('click', function() {
      if (isRecording) {
        stopRecording();
      } else {
        startRecording();
      }
    });
  }
  
  if (recordButton) {
    recordButton.addEventListener('click', function() {
      if (isRecording) {
        stopRecording();
      } else {
        startRecording();
      }
    });
  }
  
  // File Upload Functionality
  const uploadZone = document.getElementById('upload-zone');
  const fileInput = document.getElementById('audio-file');
  const fileInfo = document.getElementById('file-info');
  const fileName = document.getElementById('file-name');
  const playFileBtn = document.getElementById('play-file');
  const uploadProgress = document.getElementById('upload-progress');
  const uploadProgressFill = document.getElementById('upload-progress-fill');
  const fileAnalyzing = document.getElementById('file-analyzing');
  const fileResult = document.getElementById('file-result');
  const fileGlucoseValue = document.getElementById('file-glucose-value');
  const fileGlucoseStatus = document.getElementById('file-glucose-status');
  const analyzeFileBtn = document.getElementById('analyze-file');
  
  let audioObject = null;
  let isPlaying = false;
  
  if (uploadZone) {
    uploadZone.addEventListener('click', function() {
      fileInput.click();
    });
  }
  
  if (fileInput) {
    fileInput.addEventListener('change', function(e) {
      if (e.target.files && e.target.files[0]) {
        handleFileUpload(e.target.files[0]);
      }
    });
  }
  
  function handleFileUpload(file) {
    fileName.textContent = file.name;
    fileInfo.classList.remove('hidden');
    
    // Create audio object for preview
    if (audioObject) {
      audioObject.pause();
      URL.revokeObjectURL(audioObject.src);
    }
    
    const audioURL = URL.createObjectURL(file);
    audioObject = new Audio(audioURL);
    
    audioObject.addEventListener('ended', function() {
      isPlaying = false;
      playFileBtn.textContent = '🔊';
      playFileBtn.classList.remove('playing');
    });
    
    // Enable analyze button
    analyzeFileBtn.disabled = false;
    fileResult.classList.add('hidden');
  }
  
  if (playFileBtn) {
    playFileBtn.addEventListener('click', function() {
      if (!audioObject) return;
      
      if (isPlaying) {
        audioObject.pause();
        isPlaying = false;
        playFileBtn.textContent = '🔊';
        playFileBtn.classList.remove('playing');
      } else {
        audioObject.play();
        isPlaying = true;
        playFileBtn.textContent = '⏸️';
        playFileBtn.classList.add('playing');
      }
    });
  }
  
  if (analyzeFileBtn) {
    analyzeFileBtn.addEventListener('click', function() {
      if (!audioObject) return;
      
      uploadProgress.classList.remove('hidden');
      uploadProgressFill.style.width = '0%';
      fileResult.classList.add('hidden');
      
      // Simulate upload progress
      let progress = 0;
      const progressInterval = setInterval(() => {
        progress += 10;
        uploadProgressFill.style.width = `${progress}%`;
        
        if (progress >= 100) {
          clearInterval(progressInterval);
          uploadProgress.classList.add('hidden');
          fileAnalyzing.classList.remove('hidden');
          
          // Simulate analysis
          setTimeout(() => {
            fileAnalyzing.classList.add('hidden');
            showFileResults();
          }, 2000);
        }
      }, 200);
    });
  }
  
  function showFileResults() {
    // Generate random glucose level between 70 and 180
    const randomGlucose = Math.floor(Math.random() * (180 - 70 + 1) + 70);
    fileGlucoseValue.textContent = `${randomGlucose} mg/dL`;
    
    // Set status based on value
    if (randomGlucose < 70) {
      fileGlucoseStatus.textContent = 'Low';
      fileGlucoseStatus.className = 'glucose-status low';
    } else if (randomGlucose > 140) {
      fileGlucoseStatus.textContent = 'High';
      fileGlucoseStatus.className = 'glucose-status high';
    } else {
      fileGlucoseStatus.textContent = 'Normal';
      fileGlucoseStatus.className = 'glucose-status normal';
    }
    
    fileResult.classList.remove('hidden');
  }
  
  // Drag and Drop File Upload
  if (uploadZone) {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      uploadZone.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    ['dragenter', 'dragover'].forEach(eventName => {
      uploadZone.addEventListener(eventName, highlight, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
      uploadZone.addEventListener(eventName, unhighlight, false);
    });
    
    function highlight() {
      uploadZone.classList.add('border-highlight');
    }
    
    function unhighlight() {
      uploadZone.classList.remove('border-highlight');
    }
    
    uploadZone.addEventListener('drop', handleDrop, false);
    
    function handleDrop(e) {
      const dt = e.dataTransfer;
      const files = dt.files;
      
      if (files.length > 0) {
        fileInput.files = files;
        handleFileUpload(files[0]);
      }
    }
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
