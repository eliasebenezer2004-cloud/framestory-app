"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  const getLinkClass = (path: string) => {
    return pathname === path ? `${styles.navLink} ${styles.activeLink}` : styles.navLink;
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            FRAMESTORY
          </Link>
          <div className={styles.navRight}>
            <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setDrawerOpen(true)} className={styles.menuToggle} aria-label="Open Menu">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div 
        className={`${styles.backdrop} ${drawerOpen ? styles.backdropOpen : ""}`} 
        onClick={closeDrawer}
      ></div>

      {/* Drawer */}
      <div className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}>
        <button onClick={closeDrawer} className={styles.closeBtn} aria-label="Close Menu">
          <X size={32} />
        </button>
        <div className={styles.drawerLinks}>
          <Link href="/" onClick={closeDrawer} className={getLinkClass("/")}>Home</Link>
          <Link href="/portfolio" onClick={closeDrawer} className={getLinkClass("/portfolio")}>Portfolio</Link>
          <Link href="/services" onClick={closeDrawer} className={getLinkClass("/services")}>Services</Link>
          <Link href="/about" onClick={closeDrawer} className={getLinkClass("/about")}>About</Link>
          <Link href="/contact" onClick={closeDrawer} className={getLinkClass("/contact")}>Contact</Link>
        </div>
      </div>
    </>
  );
}
