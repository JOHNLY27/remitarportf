'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [activeHash, setActiveHash] = useState('#home');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function updateHash() {
      setActiveHash(window.location.hash || '#home');
    }

    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#learning', label: 'Learning' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={styles.nav} aria-label="Primary Navigation">
      <div className={styles.container}>
        <a href="#home" className={styles.brand} aria-label="Homepage">
          JLR
        </a>

        <button
          className={styles.navToggle}
          aria-label={showMenu ? 'Close menu' : 'Open menu'}
          aria-expanded={showMenu}
          onClick={() => setShowMenu((s) => !s)}
        >
          {showMenu ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.link}
                aria-current={activeHash === link.href ? 'page' : undefined}
                onClick={() => setShowMenu(false)}
              >
                <span className={styles.linkIcon} aria-hidden>
                  {link.href === '#home' && (
                    <svg viewBox="0 0 24 24" fill="none" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {link.href === '#projects' && (
                    <svg viewBox="0 0 24 24" fill="none" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
                      <rect x="14" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
                      <rect x="3" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
                      <rect x="14" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  )}
                  {link.href === '#learning' && (
                    <svg viewBox="0 0 24 24" fill="none" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 7l9 5 9-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 14.6V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {link.href === '#about' && (
                    <svg viewBox="0 0 24 24" fill="none" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M6 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {link.href === '#contact' && (
                    <svg viewBox="0 0 24 24" fill="none" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div
          className={styles.mobileMenu}
          style={{ display: showMenu ? 'block' : 'none' }}
          role="menu"
          aria-hidden={!showMenu}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setShowMenu(false)} aria-current={activeHash === link.href ? 'page' : undefined}>
              <span className={styles.linkIcon} aria-hidden>
                {link.href === '#home' && (
                  <svg viewBox="0 0 24 24" fill="none" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {link.href === '#projects' && (
                  <svg viewBox="0 0 24 24" fill="none" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="14" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="3" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="14" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                )}
                {link.href === '#learning' && (
                  <svg viewBox="0 0 24 24" fill="none" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7l9 5 9-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 14.6V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {link.href === '#about' && (
                  <svg viewBox="0 0 24 24" fill="none" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M6 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {link.href === '#contact' && (
                  <svg viewBox="0 0 24 24" fill="none" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span style={{marginLeft:8}}>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
