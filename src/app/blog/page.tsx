import styles from "../page.module.css";
import Link from "next/link";

export default function BlogHome() {
  return (
    <main className={styles.main}>
      <p>blog pageだお</p>
      <Link href='/blog/0'>0</Link>
      <Link href='/blog/1'>1</Link>
      <Link href='/blog/2'>2</Link>

    </main>
  );
}