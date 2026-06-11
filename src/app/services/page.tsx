import Link from "next/link";
import styles from "./page.module.css";

const services = [
  {
    id: "weddings",
    title: "Premium Weddings",
    description: "Our signature offering. We capture the grandeur, the rituals, and the unspoken moments of your big day with a cinematic, unobtrusive approach.",
    features: ["Pre-wedding consultation", "Multiple shooters", "Cinematic highlight film", "Premium flush-mount albums"],
    image: "/wedding1.png",
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding & Couples",
    description: "Before the madness begins, let's document your chemistry. Whether it's the beaches of Chennai or the paddy fields around Trichy, we create pure magic.",
    features: ["Location scouting", "Styling assistance", "Drone videography", "Save-the-date teasers"],
    image: "/prewed1.png",
  },
  {
    id: "puberty",
    title: "Puberty Functions",
    description: "A celebration of coming of age. We focus on the vibrant colors, the traditional half-saree details, and the joyous family gatherings.",
    features: ["Candid & traditional coverage", "Focus on rituals", "Custom photo books"],
    image: "/puberty1.png",
  },
  {
    id: "seemantham",
    title: "Seemantham (Baby Shower)",
    description: "Honoring the mother-to-be. We beautifully document the blessings, the traditional attire, and the pure joy of welcoming a new life.",
    features: ["Intimate family portraits", "Candid emotional moments", "Highlight reels"],
    image: "/seemantham2.png",
  }
];

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} gradient-text`}>Our Services</h1>
          <p className={styles.heroSubtext}>Tailored photography experiences for your milestone moments.</p>
        </div>
      </section>

      <section className={styles.servicesContainer}>
        {services.map((service) => (
          <div 
            key={service.id} 
            className={styles.serviceBlock} 
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className={styles.blockOverlay}></div>
            <div className={styles.blockContent}>
              <h2 className={`${styles.serviceTitle} gradient-text`}>{service.title}</h2>
              <p className={styles.serviceDesc}>{service.description}</p>
              <ul className={styles.featureList}>
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2>Ready to book your dates?</h2>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
