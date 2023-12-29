import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="ui container">
      <div>
        <Header />
        <AddContact />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
