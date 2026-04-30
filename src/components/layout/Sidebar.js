"use client";

import Link from 'next/link';
import '../../app/globals.css';
import styles from './Sidebar.module.css';
// import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.ctaActions}>
          <Link className={styles.ctaButton} href="#">Get in Touch</Link>
          <Link className={styles.ctaButton} href="#">Resume</Link>
        </div>

        {/* Profile description -> Little about me */}
        <div className={styles.profileContainer}>
          {/* <div className={styles.profileDescription}> */}
            <h1 className={styles.profileTitle}>Andries N Mogashoa</h1>
            <p className={styles.profileSubtitle}>Junior Full-Stack Developer</p>
            <p className={styles.profileBio}>I build fast, scalable APIs, and create innovative web solutions.</p>
          {/* </div> */}
        </div>

        {/* Hobbies */}
        <div className={styles.hobbiesContainer}>
          <div className={styles.hobbiesHeader}>
            <h3 className={styles.hobbiesTitle}>Hobbies</h3>
          </div>
            
          <ul className={styles.hobbiesList}>
            <div className={styles.hobbiesListItem}>
              <li>Art: Drawing & Painting</li>
            </div>
            <div className={styles.hobbiesListItem}>
              <li>Comic Book Writing</li>
            </div>
            <div className={styles.hobbiesListItem}>
              <li>Amateur Animator</li>
            </div>
            <div className={styles.hobbiesListItem}>
              <li>Gym & Reading</li>
            </div>
          </ul>
        </div>

        {/* Social links */}
        <div className={styles.socialLinksContainer}>
          <div className={styles.socialLinksHeader}>
            <h3 className={styles.socialLinksTitle}>Connect</h3>
          </div>
          <ul className={styles.socialLinksList}>
            <li className={styles.socialLinkItem}>
              <a className={styles.socialLink} href="https://github.com/katGhost" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </li>
            <li className={styles.socialLinkItem}>
              <a className={styles.socialLink} href="https://linkedin.com/in/andries-mogashoa" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </a>
            </li>
            <li className={styles.socialLinkItem}>
              <a className={styles.socialLink} href="https://instagram.com/ghostkatdev" target="_blank" rel="noopener noreferrer">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBklEQVR4nO2YS05CMRSG/5DABHArIgOVHUhMFA1hS75GPliBypJ8oE5EF6AwkAk1Tc6AnNykpz0tXJJ+SRNyLz2PS/n/3gKZTCazSdQADACMALwAmAEwyjGjWCOKbXMk4RTAR4SCXeMdwEnMwisALldQuGHjgnKruVpD8YbGeYxlw4P+AbgGsAegHuEB1SnWLYB5Qb5eaOBawZr/ArCNdLQox3LONwDVkGCDgiefovhDKnoCoAtgp+CX6IcEHrEgdtmkYLKU45Ou3bHcDyGBX1mQ3UCfcOn8pKCBfZbbzvfmlwVpRPIJrvNdasIWf0DXmmyOrcUbnji2T7h0XppfHeAqkc6bVTQg8YlQnTepGwjxCR+dN6kbCPUJqc6b1A1ofEKi8yZ1AyE+AQ+dN6kbmHr6xDINNne6aQ1ssbk/ZVhCViqldMqwhB7Z/RuP2EM2974sMmp13kW7LDJao40ZN7KWo/hvNme8LiMD7Sr59+a0bejQH7tBn4cFT34B4EiRX90AlCcWZxHyqwNUaGvsU/iCdqKVlA34vtD0aGPmKt6u+WNHrGaMF5oQna+Soti9zTOZnR1PJJV94QlDR+ATTjQ6r2Uo8AknoTqvpR3rWCVE57W0PXxChETntTQCfULMOk6mjcAnxITovHYsBD7hjVTntWMs8IlginReW/A0wCcymUwG5eAfUKaZTFQY/x4AAAAASUVORK5CYII=" alt="instagram-new--v1" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}