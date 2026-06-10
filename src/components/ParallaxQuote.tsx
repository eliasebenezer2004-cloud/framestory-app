import styles from "./ParallaxQuote.module.css";

export default function ParallaxQuote() {
  return (
    <section className={styles.parallaxSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={`${styles.quoteText} gradient-text`}>
          "Photography is the story we fail to put into words."
        </h2>
        <p className={styles.author}>— Destin Sparks</p>
      </div>
    </section>
  );
}
