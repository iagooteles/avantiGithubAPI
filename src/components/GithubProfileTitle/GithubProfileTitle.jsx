import React from "react";
import "./GithubProfileTitle.css";

const GithubProfileTitle = () => {
  return (
    <section className="container">
        <div className="title-container">
        <img src="/images/github-logo.png" alt="Logo do GitHub" title="Logo do GitHub" className="github-logo" />
        <span className="profile-text">Perfil</span>
        <img src="/images/github-text-image.png" alt="Imagem do GitHub" title="Imagem do GitHub" className="github-image" />
        </div>
    </section>
  );
};

export default GithubProfileTitle;
