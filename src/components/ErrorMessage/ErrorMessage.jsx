import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = () => {
  return (
    <section className="error-container">
      <p className="error-text">
        Nenhum perfil foi encontrado com esse nome de usuário. <br />
        Tente novamente.
      </p>
    </section>
  );
};

export default ErrorMessage;
