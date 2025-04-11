import React from "react";
import styles from "./Card.module.css";

const Card = ({ user }) => {
  return (
    <section className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <img
          src={user.avatar_url}
          alt={`Avatar de ${user.name}`}
          title={`Avatar de ${user.name}`}
          className={styles.profileImage}
        />
        <div className={styles.profileInfo}>
          <h2 className={styles.profileName}>{user.name || user.login}</h2>
          <p className={styles.profileDescription}>
            {user.bio || "Bio do usuário não disponível."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card;
