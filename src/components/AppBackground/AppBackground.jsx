import styles from './AppBackground.module.css';

function AppBackground() {
  return (
    <>
      <div className={styles.bgFundo} />
      <div className={styles.gradientLeft} />
      <div className={styles.gradientRight} />
    </>
  );
}

export default AppBackground;
