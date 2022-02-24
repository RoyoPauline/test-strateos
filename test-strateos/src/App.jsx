import React from 'react';

import { useState } from 'react';
import UserCard from './components/UserCard';

export default function App() {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    phone: '',
  });
  const [userList, setUserList] = useState([]);

  const submit = (user) => {
    userList.push(user);
    setUser({ firstname: '', lastname: '', phone: '' });
    console.log(userList);
  };
  return (
    <div>
      <div>
        <h1>Liste de vos contacts</h1>
        <p>Ajoutez un contact pour ne pas l'oublier</p>
        <input
          placeholder="Nom de famille"
          type="text"
          value={user.lastname}
          onChange={(e) => setUser({ ...user, lastname: e.target.value })}
        ></input>
        <input
          placeholder="Prénom"
          type="text"
          value={user.firstname}
          onChange={(e) => setUser({ ...user, firstname: e.target.value })}
        ></input>
        <input
          placeholder="Numéro de téléphone"
          type="text"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        ></input>

        <button onClick={() => submit(user)}>Ajouter</button>
      </div>
      <div>
        {userList
          .sort((a, b) => a.firstname.localeCompare(b.firstname))
          .map((user) => {
            return (
              <UserCard
                firstname={user.firstname}
                lastname={user.lastname}
                phone={user.phone}
                order={user.order}
              />
            );
          })}
      </div>
    </div>
  );
}