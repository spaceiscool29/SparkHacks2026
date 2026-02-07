// src/components/BackgroundAudio.tsx
import React, { useState, useRef, useEffect } from 'react';

interface BackgroundAudioProps {
  audioFile?: string;
  volume?: number;
  loop?: boolean;
}

const BackgroundAudio: React.FC<BackgroundAudioProps> = ({
  audioFile = '/krasnoshchok-horror-scary-dark-music-413504.mp3',
  volume = 0.3,
  loop = true
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(volume);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setCurrentVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = currentVolume;
      audio.loop = loop;
      
      // Try to autoplay, but don't worry if it fails
      audio.play().catch(error => {
        console.log('Audio will play after user interaction:', error.message);
      });
    }
  }, [currentVolume, loop]);

  return (
    <div className="audio-controls" style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
      background: 'rgba(0,0,0,0.7)',
      padding: '10px',
      borderRadius: '8px',
      color: 'white',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <audio ref={audioRef}>
        <source src={audioFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      <button 
        onClick={togglePlay}
        style={{
          background: 'rgba(255,255,255,0.2)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {isPlaying ? '⏸️ Pause' : '▶️ Play'}
      </button>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <span>🔊</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={currentVolume}
          onChange={handleVolumeChange}
          style={{ width: '60px' }}
        />
        <span>{Math.round(currentVolume * 100)}%</span>
      </div>
    </div>
  );
};

export default BackgroundAudio;