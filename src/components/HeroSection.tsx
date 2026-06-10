"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import styles from "./HeroSection.module.css";

const images = [
  "/wedding1.png",
  "/prewed1.png",
  "/seemantham1.png"
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Text fade in animation
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out", delay: 0.5 }
      );
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000); // 8 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {images.map((src, index) => (
        <div
          key={src}
          className={`${styles.imageWrapper} ${index === currentIndex ? styles.active : ""}`}
        >
          <Image
            src={src}
            alt={`Hero Background ${index + 1}`}
            fill
            priority={index === 0}
            className={styles.image}
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
      <div className={styles.overlay}></div>
      <div className={styles.content} ref={textRef}>
        <h1 className={`${styles.title} gradient-text`}>Capturing Life's Most Beautiful Stories</h1>
        <p className={styles.subtitle}>Premium Wedding & Event Photography in Trichy</p>
        <button className={styles.ctaButton} onClick={() => window.location.href = '/portfolio'}>
          View Our Work
        </button>
      </div>
    </section>
  );
}
