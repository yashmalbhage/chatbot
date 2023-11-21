import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by clickin on{" "}
          <code className={styles.code}> Signup with google </code>{" "}
        </p>{" "}
        <div></div>{" "}
      </div>{" "}
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next2.png"
          alt="Next.js Logo"
          width={397}
          height={227}
          priority
        />
      </div>{" "}
      <div className={styles.center}>
        <Link href="/chat" passHref>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>
              Signup with <span> Google </span>{" "}
            </h2>{" "}
            <p>Instantly start journey with Neobot. </p>{" "}
          </a>{" "}
        </Link>
      </div>{" "}
    </main>
    </>
  )
}
