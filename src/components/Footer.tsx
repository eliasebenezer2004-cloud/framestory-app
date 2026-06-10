import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.brand}>FRAMESTORY</h3>
          <p className={styles.tagline}>Capturing Trichy's Most Beautiful Stories.</p>
          <div className={styles.socials}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>Contact</h4>
          <ul className={styles.list}>
            <li>
              <Phone size={16} className={styles.icon} />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li>
              <Mail size={16} className={styles.icon} />
              <a href="mailto:hello@framestory.in">hello@framestory.in</a>
            </li>
            <li>
              <MapPin size={16} className={styles.icon} />
              <span>123 Cross Cut Road, Trichy, Tamil Nadu</span>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>Studio Hours</h4>
          <ul className={styles.list}>
            <li>
              <Clock size={16} className={styles.icon} />
              <span>Mon - Sun: 10 AM - 10 PM</span>
            </li>
            <li>Available for travel across South India.</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.list}>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/services">Services & Products</Link></li>
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/contact">Book Now</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Framestory. All rights reserved.</p>
      </div>
    </footer>
  );
}
