import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const App = () => {
  const waveformRef = useRef(null);
  const playPauseBtnRef = useRef(null);
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');

  useEffect(() => {
    if (waveformRef.current) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35);
      gradient.addColorStop(0, '#B1B1B1');
      gradient.addColorStop((canvas.height * 0.7) / canvas.height, '#B1B1B1');
      gradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, '#ffffff');
      gradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, '#ffffff');
      gradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, '#656666');
      gradient.addColorStop(1, '#656666');

      const progressGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35);
      progressGradient.addColorStop(0, '#96c');
      progressGradient.addColorStop((canvas.height * 0.7) / canvas.height, '#96c');
      progressGradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, '#ffffff');
      progressGradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, '#ffffff');
      progressGradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, '#624182');
      progressGradient.addColorStop(1, '#624182');

      const ws = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: gradient,
        progressColor: progressGradient,
        barWidth: 4,
        barRadius: 4,
        url: '/demo-audio.mp3',
      });

      ws.on('decode', (duration) => {
        setDuration(formatTime(duration));
      });

      ws.on('timeupdate', (currentTime) => {
        setCurrentTime(formatTime(currentTime));
      });

      setWavesurfer(ws);

      return () => ws.destroy();
    }
  }, [waveformRef]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemainder = Math.round(seconds) % 60;
    const paddedSeconds = `0${secondsRemainder}`.slice(-2);
    return `${minutes}:${paddedSeconds}`;
  };

  const handlePlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  const handlePointerMove = (e) => {
    const hover = document.querySelector('#hover');
    hover.style.width = `${e.nativeEvent.offsetX}px`;
  };

  return (
    <>
      <i
        id="play-pause-btn"
        className={`fa ${isPlaying ? 'fa-pause' : 'fa-play'}`}
        ref={playPauseBtnRef}
        onClick={handlePlayPause}
      ></i>
      <div id="waveform" ref={waveformRef} onPointerMove={handlePointerMove}>
        <div id="time">{currentTime}</div>
        <div id="duration">{duration}</div>
        <div id="hover"></div>
      </div>
    </>
  );
};

export default App;
