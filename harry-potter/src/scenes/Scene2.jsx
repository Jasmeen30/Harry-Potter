import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Scene2.css";

import hallVideo from "../assets/videos/greathall.mp4";
import candles from "../assets/images/candles.jpg";

export default function Scene2({ nextScene }) {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);
  const candlesRef = useRef(null);

  useEffect(() => {
    gsap.from(videoRef.current, {
      scale: 1.15,
      duration: 10,
      ease: "power2.out",
    });

    gsap.from(titleRef.current, {
      opacity: 0,
      y: 80,
      duration: 2,
    });

    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 40,
      duration: 2,
      delay: 1,
    });

    gsap.from(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 2,
    });

    gsap.to(candlesRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="scene2">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="scene2-video"
      >
        <source src={hallVideo} type="video/mp4" />
      </video>

      <img
        ref={candlesRef}
        src={candles}
        className="floating-candles"
        alt="Candles"
      />

      <div className="overlay">
        <h1 ref={titleRef}>The Great Hall</h1>

        <p ref={subtitleRef}>
          Thousands of enchanted candles illuminate the ancient ceiling.
        </p>

        <button ref={buttonRef} onClick={nextScene}>
          Proceed to Sorting Ceremony
        </button>
      </div>
    </section>
  );
}
