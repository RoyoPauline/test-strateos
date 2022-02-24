import React from 'react';

import { useState } from 'react';

const UserCard = ({ firstname, lastname, phone, order }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <>
          <button onClick={() => setIsVisible(false)}> Supprimer</button>
          {firstname}
          {lastname}
          {phone}
        </>
      )}
    </>
  );
};

export default UserCard;