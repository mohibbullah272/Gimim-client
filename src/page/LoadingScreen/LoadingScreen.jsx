import { useEffect, useState } from 'react';
import './LoadingScreen.css'; // We'll create this CSS file next

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 2, 100));
      }
    }, 100); // Update every 100ms to complete in roughly 5 seconds
    
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <div className="loading-progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="loading-text">Loading... {progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;