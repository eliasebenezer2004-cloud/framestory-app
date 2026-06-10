"use client";

import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.leftColumn}>
            <h1 className={`${styles.heading} gradient-text`}>Let's Tell Your Story.</h1>
            <p className={styles.subtext}>
              We'd love to hear about your upcoming event. Reach out to us directly or fill out the form, and we'll get back to you with availability.
            </p>

            <ul className={styles.contactList}>
              <li>
                <div className={styles.iconWrapper}><Phone size={24} /></div>
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+919876543210" className={styles.contactLink}>+91 98765 43210</a>
                </div>
              </li>
              <li>
                <div className={styles.iconWrapper}><MessageCircle size={24} /></div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Chat with us</a>
                </div>
              </li>
              <li>
                <div className={styles.iconWrapper}><MapPin size={24} /></div>
                <div>
                  <h4>Studio Location</h4>
                  <p>123 Cross Cut Road, Trichy, Tamil Nadu</p>
                </div>
              </li>
              <li>
                <div className={styles.iconWrapper}><Clock size={24} /></div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Sun: 10 AM - 10 PM</p>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.rightColumn}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <input type="text" id="name" required placeholder=" " />
                <label htmlFor="name">Your Name</label>
              </div>

              <div className={styles.inputGroup}>
                <input type="tel" id="phone" required placeholder=" " />
                <label htmlFor="phone">Phone Number</label>
              </div>

              <div className={styles.inputGroup}>
                <input type="date" id="date" required placeholder=" " className={styles.dateInput} />
                <label htmlFor="date" className={styles.dateLabel}>Event Date</label>
              </div>

              <div className={styles.inputGroup}>
                <select id="type" required defaultValue="">
                  <option value="" disabled hidden>Select Event Type</option>
                  <option value="wedding">Wedding & Reception</option>
                  <option value="pre-wedding">Pre-Wedding Shoot</option>
                  <option value="puberty">Puberty Function</option>
                  <option value="seemantham">Seemantham</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="type">Event Type</label>
              </div>

              <div className={styles.inputGroup}>
                <input type="text" id="venue" required placeholder=" " />
                <label htmlFor="venue">Event Venue / Location</label>
              </div>

              <div className={styles.inputGroup}>
                <textarea id="details" rows={4} required placeholder=" "></textarea>
                <label htmlFor="details">Tell us about your event</label>
              </div>

              <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Check Availability</button>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.10547000858!2d78.61899981014872!3d10.81583592182283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aec587%3A0x11211599db46e5de!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Studio Location"
        ></iframe>
      </section>
    </main>
  );
}
