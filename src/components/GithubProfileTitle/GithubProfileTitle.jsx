import React from "react";
import styles from "./GithubProfileTitle.module.css";

const GithubProfileTitle = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <img
          src="/images/github-logo.png"
          alt="Logo do GitHub"
          title="Logo do GitHub"
          className={styles.githubLogo}
        />
        <span className={styles.profileText}>Perfil</span>
        <img
          src="/images/github-text-image.png"
          alt="Imagem do GitHub"
          title="Imagem do GitHub"
          className={styles.githubImage}
        />
      </div>
    </section>
  );
};

export default GithubProfileTitle;
