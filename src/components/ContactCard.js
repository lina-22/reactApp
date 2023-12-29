import React from "react";
import ContactList from "./ContactList";

export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <div className="content">
        <div className="header">{name}</div>
        <div className="header">{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}></i>
    </div>
  );
}
