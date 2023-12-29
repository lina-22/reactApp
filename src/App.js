import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const contacts = [
    { id: "1", name: "Lina", email: "xyz@gmail.com" },
    { id: "1", name: "Lina", email: "xyz@gmail.com" },
  ];
  return (
    <div className="ui container">
      <div>
        <Header />
        <AddContact />
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
