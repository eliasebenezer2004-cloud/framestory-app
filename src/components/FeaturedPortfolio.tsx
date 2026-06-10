"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./FeaturedPortfolio.module.css";

const portfolioImages = [
  "/wedding1.png",
  "/prewed1.png",
  "/puberty1.png",
  "/seemantham1.png",
  "/candid3.png",
];

export default function FeaturedPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sliderRef.current && containerRef.current) {
      const sections = gsap.utils.toArray(`.${styles.slide}`);
      
      const pinAnimation = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => `+=${containerRef.current?.offsetWidth || 0}`,
        },
      });

      return () => {
        pinAnimation.kill();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, []);

  return (
    <section className={styles.portfolioSection} ref={containerRef}>
      <div className={styles.slider} ref={sliderRef}>
        {portfolioImages.map((src, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <Image
                src={src}
                alt={`Featured Portfolio ${index + 1}`}
                fill
                className={styles.image}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
