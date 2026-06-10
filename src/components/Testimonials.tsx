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
  // Duplicate reviews to create a seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={`${styles.title} gradient-text`}>Client Stories</h2>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {duplicatedReviews.map((review, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.stars}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
                  ))}
                </div>
                <p className={styles.text}>"{review.text}"</p>
                <div className={styles.authorInfo}>
                  <p className={styles.name}>{review.name}</p>
                  <p className={styles.event}>{review.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
