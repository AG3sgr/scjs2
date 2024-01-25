import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (

    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to 
          <code className={styles.code}> Super Cleaner Janitorial Services</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          src="/scjs_logo.png"
          alt="SCJS Logo"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://scjs.us/about"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About SCJS<span>-&gt;</span>
          </h2>
          <p>Learn more about our organization.</p>
        </a>

        <a
          href="https://scjs.us/services"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Our Services <span>-&gt;</span>
          </h2>
          <p>Explore services we provide..</p>
        </a>

        <a
          href="https://www.facebook.com/p/super-cleaning-janatorial-service-100064139251497/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>
            Contact us for more details.
          </p>
        </a>
      </div>
    </main>
  )
}
