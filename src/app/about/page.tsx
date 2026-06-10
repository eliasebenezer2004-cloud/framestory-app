import Image from "next/image";
import { Camera, Film, Award } from "lucide-react";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image src="/candid2.png" alt="Framestory Team" fill className={styles.heroImage} />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} gradient-text`}>Our Story</h1>
        </div>
      </section>

      <section className={styles.founderSection}>
        <div className={styles.container}>
          <div className={styles.founderGrid}>
            <div className={styles.imageWrapper}>
              <Image src="/hero2.png" alt="Founder of Framestory" fill className={styles.founderImage} />
            </div>
            <div className={styles.founderText}>
              <h2 className={styles.greeting}>Hi, we are Framestory.</h2>
              <div className={styles.letter}>
                <p>
                  We don't just "provide photography solutions." We are simply obsessed with light, emotion, and the beautiful chaos of South Indian weddings.
                </p>
                <p>
                  When we started Framestory in Trichy, we noticed a trend: wedding photography had become a series of stiff poses and forced smiles. We wanted to change that. We believe the best photos are the ones you didn't know were being taken. The tear in a father's eye, the unrestrained laughter of friends, the quiet moment between a couple amidst a hundred guests.
                </p>
                <p>
                  Our approach is deeply personal. We become part of your family for the day, ensuring you feel comfortable enough to just be yourself. That's when the magic happens.
                </p>
                <p className={styles.signature}>- The Framestory Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.philosophySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Our Philosophy</h2>
          <div className={styles.pillarsGrid}>
            <div className={styles.pillar}>
              <div className={styles.iconWrapper}>
                <Camera size={32} />
              </div>
              <h3 className={styles.pillarTitle}>Unobtrusive Candid Focus</h3>
              <p className={styles.pillarDesc}>We blend into the background, capturing raw and genuine emotions without interrupting your moments.</p>
            </div>
            <div className={styles.pillar}>
              <div className={styles.iconWrapper}>
                <Film size={32} />
              </div>
              <h3 className={styles.pillarTitle}>Cinematic Editing</h3>
              <p className={styles.pillarDesc}>Every photo is carefully color-graded to reflect the premium, timeless aesthetic of a masterpiece film.</p>
            </div>
            <div className={styles.pillar}>
              <div className={styles.iconWrapper}>
                <Award size={32} />
              </div>
              <h3 className={styles.pillarTitle}>Timeless Quality</h3>
              <p className={styles.pillarDesc}>We don't follow passing trends. We deliver heirlooms that will look just as stunning 50 years from now.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
