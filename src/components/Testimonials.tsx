"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import styles from "./Testimonials.module.css";

const reviews = [
  {
    name: "Karthik & Priya",
    event: "Traditional Wedding",
    rating: 5,
    text: "Framestory captured our traditional wedding at Srirangam so beautifully. The team was unobtrusive, and the cinematic quality of the photos blew us away. Highly recommend them for any event in Trichy!",
  },
  {
    name: "Arjun & Sneha",
    event: "Reception",
    rating: 5,
    text: "We booked them for our reception at SRM Hotel. The lighting was tricky, but they handled it like absolute pros. The candid moments they caught are our favorite memories.",
  },
  {
    name: "Meenakshi & Family",
    event: "Pre-Wedding & Muhurtham",
    rating: 5,
    text: "From the pre-wedding shoot by the Kaveri river to the main Muhurtham, Framestory was incredible. They truly preserved the soul of our moments. 5 stars aren't enough!",
  }
];

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Auto-advance on mobile
  useEffect(() => {
    if (!isMobile) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isMobile]);

  // Duplicate reviews for desktop marquee loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={`${styles.title} gradient-text`}>Client Stories</h2>

        {isMobile ? (
          /* Mobile: single-card carousel with fade */
          <div className={styles.carousel}>
            <div className={styles.carouselTrack}>
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`${styles.carouselSlide} ${index === activeIndex ? styles.carouselActive : ""}`}
                >
                  <div className={styles.card}>
                    <div className={styles.stars}>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
                      ))}
                    </div>
                    <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
                    <div className={styles.authorInfo}>
                      <p className={styles.name}>{review.name}</p>
                      <p className={styles.event}>{review.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.dots}>
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop: marquee scroll */
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeTrack}>
              {duplicatedReviews.map((review, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.stars}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
                    ))}
                  </div>
                  <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
                  <div className={styles.authorInfo}>
                    <p className={styles.name}>{review.name}</p>
                    <p className={styles.event}>{review.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
