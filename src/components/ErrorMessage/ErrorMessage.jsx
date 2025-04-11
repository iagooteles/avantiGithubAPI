import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <section className={styles.errorContainer}>
      <p className={styles.errorText}>
        Nenhum perfil foi encontrado com esse nome de usuário. <br />
        Tente novamente.
      </p>
    </section>
  );
};

export default ErrorMessage;
