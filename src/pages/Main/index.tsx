import logo from '@assets/logo.svg';
import styles from './styles.module.scss';

export function Main() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1 className={styles.title}>
          Welcome to <code>React.js</code>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>src/App.tsx</code>
        </p>
      </header>
    </div>
  );
}
