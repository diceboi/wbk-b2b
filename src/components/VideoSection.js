"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="video-section" ref={videoRef}>
        <div style={{ borderRadius: `16px`, overflow: `hidden`, textAlign: `center`, background: `#000`, position: `relative`, paddingBottom: `56.25%`, height: 0 }}>
          {isVisible && (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/VJba8mH8WTk?autoplay=1&mute=1&controls=1"
              title="Wall Bed King — See It In Action"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: `absolute`, top: 0, left: 0, width: `100%`, height: `100%` }}
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
}
