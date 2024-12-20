import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.pageContainer}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; {new Date().getFullYear()} Filmographie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
