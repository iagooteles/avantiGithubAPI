import React from "react";
import "./Card.css";

const Card = ({ user }) => {
  return (
    <section className="card-wrapper">
      <div className="card-container">
        <img
          src={user.avatar_url}
          alt={`Avatar de ${user.name}`}
          title={`Avatar de ${user.name}`}
          className="profile-image"
        />
        <div className="profile-info">
          <h2 className="profile-name">{user.name || user.login}</h2>
          <p className="profile-description">
            {user.bio || "Bio do usuário não disponível."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card;
