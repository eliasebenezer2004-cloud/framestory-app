"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";

const categories = ["All", "Weddings", "Pre-Wedding", "Puberty Functions", "Seemantham", "Candid"];

const portfolioData = [
  // Weddings
  { id: 1, src: "/wedding1.png", category: "Weddings", title: "The Grand Mandapam" },
  { id: 2, src: "/wedding2.png", category: "Weddings", title: "Sacred Moments" },
  { id: 3, src: "/portfolio1.png", category: "Weddings", title: "Arjun & Sneha's Wedding - Srirangam" },
  { id: 4, src: "/hero1.png", category: "Weddings", title: "Traditional South Indian Wedding" },
  { id: 5, src: "/hero2.png", category: "Weddings", title: "The Beautiful Couple" },

  // Pre-Wedding
  { id: 6, src: "/prewed1.png", category: "Pre-Wedding", title: "Sunset at Marina Beach" },
  { id: 7, src: "/prewed2.png", category: "Pre-Wedding", title: "A Walk in the Paddy Fields" },
  { id: 8, src: "/hero2.png", category: "Pre-Wedding", title: "Golden Hour Shoot" },
  { id: 9, src: "/candid2.png", category: "Pre-Wedding", title: "Joyous Laughter" },
  { id: 10, src: "/portfolio2.png", category: "Pre-Wedding", title: "Holding Hands Forever" },

  // Puberty Functions
  { id: 11, src: "/puberty1.png", category: "Puberty Functions", title: "The Half-Saree Ceremony" },
  { id: 12, src: "/puberty2.png", category: "Puberty Functions", title: "Traditional Silk & Gold" },
  { id: 13, src: "/hero3.png", category: "Puberty Functions", title: "A Girl's Big Day" },
  { id: 14, src: "/portfolio1.png", category: "Puberty Functions", title: "Blessings and Traditions" },
  { id: 15, src: "/hero1.png", category: "Puberty Functions", title: "Festive Vibes" },

  // Seemantham
  { id: 16, src: "/seemantham1.png", category: "Seemantham", title: "A Beautiful Journey" },
  { id: 17, src: "/seemantham2.png", category: "Seemantham", title: "Blessing the Mother" },
  { id: 18, src: "/hero3.png", category: "Seemantham", title: "Embracing Motherhood" },
  { id: 19, src: "/candid3.png", category: "Seemantham", title: "Tears of Joy" },
  { id: 20, src: "/wedding2.png", category: "Seemantham", title: "The Ceremony" },

  // Candid
  { id: 21, src: "/candid3.png", category: "Candid", title: "A Father's Love" },
  { id: 22, src: "/candid2.png", category: "Candid", title: "Bridesmaids Laughter" },
  { id: 23, src: "/portfolio2.png", category: "Candid", title: "The Perfect Moment" },
  { id: 24, src: "/hero3.png", category: "Candid", title: "Bridal Preparation" },
  { id: 25, src: "/prewed2.png", category: "Candid", title: "Lost in the Moment" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const gridRef = useRef<HTMLDivElement>(null);

  const filteredData = activeFilter === "All" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeFilter);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (gridRef.current) {
      const items = gridRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, [activeFilter]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, filteredData, currentImageIndex]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredData.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredData.length) % filteredData.length);
  };

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image src="/portfolio1.png" alt="Our Masterpieces" fill className={styles.heroImage} />
        <div className={styles.heroOverlay}></div>
        <h1 className={styles.heroTitle}>Our Masterpieces</h1>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.filters}>
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`${styles.filterBtn} ${activeFilter === cat ? styles.activeFilter : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.grid} ref={gridRef}>
            {filteredData.map((item, index) => (
              <div 
                key={item.id} 
                className={styles.gridItem}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className={styles.gridImage} 
                />
                <div className={styles.overlay}>
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className={styles.lightbox}>
          <button className={styles.closeBtn} onClick={() => setLightboxOpen(false)}>
            <X size={32} />
          </button>
          <button className={styles.prevBtn} onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            <ChevronLeft size={48} />
          </button>
          
          <div className={styles.lightboxContent}>
            <Image 
              src={filteredData[currentImageIndex].src} 
              alt={filteredData[currentImageIndex].title} 
              fill 
              className={styles.lightboxImage} 
            />
          </div>

          <button className={styles.nextBtn} onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </main>
  );
}
