import React from "react";

import { useState } from "react";

const UserCard = ({ firstname, lastname, phone, createdAt }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <div className="container">
          
          <div className="card">
            <p className="subtitle">Prénom : {firstname} </p>
            <p className="subtitle">Nom de famille : {lastname} </p>
            <p className="subtitle">Numéro de téléphone : {phone} </p>
            <p className="subtitle">Contact créé le : {createdAt} </p>
          </div>
          <button className="button" onClick={() => setIsVisible(false)}>
            {" "}
            Supprimer
          </button>
        </div>
      )}
    </>
  );
};

export default UserCard;
