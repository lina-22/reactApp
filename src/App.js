import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { v4 as uuid } from "uuid";

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";
  // const contacts = [
  //   { id: "1", name: "Lina", email: "xyz@gmail.com" },
  //   { id: "1", name: "Lina", email: "xyz@gmail.com" },
  // ];
  const addContactHandler = (contact) => {
    console.log(contact);
    // setContacts([...contacts, contact]);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <div>
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
