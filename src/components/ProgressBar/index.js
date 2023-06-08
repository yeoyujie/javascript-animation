import React, { useEffect, useState } from 'react';

function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollProgress = scrollTop / (scrollHeight - clientHeight);
    setScrollProgress(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress * 100}%`,
        height: scrollProgress >= 1 ? '1vh' : '0.5vh',
        backgroundColor: scrollProgress >= 1 ? '#00ff00' : '#029be3',
        zIndex: 9999,
      }}
    />
  );
}

export default ProgressBar;
