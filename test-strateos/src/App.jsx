import React from "react";
import "./App.css";
import { useState } from "react";
import UserCard from "./components/UserCard";

export default function App() {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    createdAt: dateTime,
  });
  const [userList, setUserList] = useState([]);

  const [ascendantFilter, setAscendantFilter] = useState(true);

  const submit = (user) => {
    if (user.firstname.length !== 0) {
      userList.push(user);
      setUserList((list) =>
        [...list].sort((a, b) => a.firstname.localeCompare(b.firstname))
      );
      setUser({ firstname: "", lastname: "", phone: "", createdAt: dateTime });
    }
  };
  return (
    <div className="container">
      <div>
        <h1 className="title">Liste de vos contacts</h1>
        <p>Ajoutez un contact pour ne pas l'oublier</p>
        <form>
          <div className="user-details">
            <span ClassName="details"> Nom de famille</span>
            <input
              placeholder="Entrez votre nom de famille"
              type="text"
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            ></input>
          </div>
          <div className="user-details">
            <span ClassName="details">Prénom</span>
            <input
              placeholder="Entrez votre prénom"
              type="text"
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            ></input>
          </div>
          <div className="user-details">
            <span className="details">Numéro de téléphone</span>
            <input
              placeholder="Entrez votre numéro de téléphone"
              type="text"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            ></input>
          </div>
        </form>

        <button className="button" onClick={() => submit(user)}>
          Ajouter
        </button>

        <button
          className="button"
          onClick={() => {
            setUserList((list) =>
              [...list].sort((a, b) => {
                var dateA = new Date(a.createdAt),
                  dateB = new Date(b.createdAt);
                return ascendantFilter ? dateA - dateB : dateB - dateA;
              })
            );
            setAscendantFilter(!ascendantFilter);
          }}
        >
          Filtrer par ordre chronologique
        </button>
      </div>

      <div>
        {userList.map((user) => {
          return (
            <UserCard
              firstname={user.firstname}
              lastname={user.lastname}
              phone={user.phone}
              createdAt={user.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
}
