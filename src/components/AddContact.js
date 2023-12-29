import React from "react";
import { Button, Form } from "semantic-ui-react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <Form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" />
          </div>
          <Button className="ui button blue">Add</Button>
        </Form>
      </div>
    );
  }
}

export default AddContact;
