import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Scene1.css";
import fogImage from "../assets/images/fog.jpg";

import castleVideo from "../assets/videos/castle.mp4";

export default function Scene1({ nextScene }) {
  const video = useRef();
  const title = useRef();
  const subtitle = useRef();
  const button = useRef();
  const fogRef = useRef(null);

  useEffect(() => {
    gsap.from(video.current, {
      scale: 1.3,
      duration: 12,
      ease: "power2.out",
    });

    gsap.from(title.current, {
      y: 80,
      opacity: 0,
      duration: 2,
    });

    gsap.from(subtitle.current, {
      y: 50,
      opacity: 0,
      delay: 1,
      duration: 2,
    });

    gsap.from(button.current, {
      opacity: 0,
      delay: 2,
      scale: 0.5,
      duration: 1,
    });
    gsap.to(fogRef.current, {
      x: 500,
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  }, []);

  return (
    <section className="scene1">
      <video
        ref={video}
        autoPlay
        muted
        loop
        playsInline
        className="scene1-video"
      >
        <source src={castleVideo} type="video/mp4" />
      </video>

      <img ref={fogRef} src={fogImage} alt="Fog" className="fog" />

      <div className="overlay">
        <h1 ref={title}>Welcome to Hogwarts</h1>

        <p ref={subtitle}>Your magical journey begins now...</p>

        <button ref={button} onClick={nextScene}>
          Begin Journey
        </button>
      </div>
    </section>
  );
}
