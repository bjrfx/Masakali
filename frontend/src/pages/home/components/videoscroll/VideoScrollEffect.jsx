import React, { useRef, useEffect, useState } from 'react';
import './ScrollVideo.css'; // Import the CSS file


const ScrollVideo = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isPinned, setIsPinned] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;

      const video = videoRef.current;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;

      // Adjust this factor to make the video playback slower
      const playbackSpeedFactor = 0.5;
      const scrollFraction = (scrollTop / maxScrollTop) * playbackSpeedFactor;

      // Ensure video duration is available and scrollFraction is a finite number
      if (isFinite(scrollFraction) && video.duration) {
        const videoDuration = video.duration;
        const currentTime = scrollFraction * videoDuration;

        if (isFinite(currentTime)) {
          video.currentTime = currentTime;
        }
      }

      // Check if the video is finished playing
      if (video.currentTime >= video.duration) {
        setIsPinned(false);
      } else {
        setIsPinned(true);
      }
    };
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`video-container ${isPinned ? 'pinned' : ''}`}>
      <video ref={videoRef} width="100%" muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ScrollVideo;
