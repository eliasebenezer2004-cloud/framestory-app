import { Star } from "lucide-react";
import styles from "./TrustBar.module.css";

export default function TrustBar() {
  return (
    <section className={styles.trustBar}>
      <div className={styles.container}>
        <div className={styles.rating}>
          <span>Rated 4.9/5 on Google</span>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
            ))}
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.logos}>
          <span className={styles.logoText}>WedMeGood</span>
          <span className={styles.logoText}>Sulekha</span>
          <span className={styles.logoText}>WeddingWire</span>
        </div>
      </div>
    </section>
  );
}
