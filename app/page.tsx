import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className={styles.logoText}>MM</span>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#work" className={styles.navLink}>
              Work
              <span className={styles.navDot}></span>
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navLink}>Contact me</a>
          </li>
          <li>
            <a href="#blogs" className={styles.navLink}>Blogs</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Left side - Name */}
          <div className={styles.heroLeft}>
            <h1 className={styles.name}>
              Marcel<br />Mendes<span className={styles.period}>.</span>
            </h1>
            <div className={styles.underline}></div>
            
            {/* Social Links */}
            <div className={styles.socials}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Center - Image */}
          <div className={styles.heroCenter}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageGlow}></div>
              <Image 
                src="/profile.png" 
                alt="Marcel Mendes" 
                width={1440}
                height={1530}
                className={styles.profileImage}
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
              />
            </div>
          </div>

          {/* Right side - Info */}
          <div className={styles.heroRight}>
            <span className={styles.introducing}>— Introducing</span>
            <h2 className={styles.title}>
              Software Engineer,<br />
              <span className={styles.titleHighlight}>based in London.</span>
            </h2>
            <p className={styles.description}>
              I craft elegant solutions to complex problems, building 
              scalable applications that make a difference. With a passion 
              for clean code and intuitive design, I bring ideas to life 
              through technology.
            </p>
            <a href="#work" className={styles.ctaLink}>
              <span>My work</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className={styles.gridPattern}></div>
      </section>
    </main>
  )
}

