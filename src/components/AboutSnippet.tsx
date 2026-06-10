import Image from "next/image";
import Link from "next/link";
import styles from "./AboutSnippet.module.css";

export default function AboutSnippet() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/hero3.png" // using one of the generated images for portrait
              alt="Framestory Portrait"
              fill
              className={styles.image}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className={styles.textColumn}>
          <h2 className={styles.heading}>
            "Photography isn't just taking pictures; it's preserving the soul of a moment."
          </h2>
          <p className={styles.paragraph}>
            At Framestory, we believe every event has its own unique rhythm. We blend into the background to capture the raw, unfiltered emotions that make your story truly yours. No awkward posing, just genuine moments frozen in time with cinematic precision.
          </p>
          <Link href="/about" className={styles.link}>
            Read Our Story <span className={styles.arrow}>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
