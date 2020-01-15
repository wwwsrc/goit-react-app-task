import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
const uuidv4 = require("uuid/v4");

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: ""
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  addContact = contact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      };
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    let flag = true;
    this.state.contacts.forEach(contact => {
      if (contact.name.toLowerCase() === this.state.name.toLowerCase()) {
        flag = false;
        alert(`${e.target.name.value} is already in contacts.`);
      }
    });
    if (flag === true && this.state.name && this.state.number) {
      this.addContact({
        name: this.state.name,
        number: this.state.number,
        id: uuidv4()
      });
      this.setState({ name: "", number: "" });
    } else if (flag === true) {
      alert("Заполните поля");
    }
  };
  deleteContact = delItem => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== delItem)
      };
    });
  };
  handleDelete = e => {
    const delItem = e.target.closest("li").id;
    this.deleteContact(delItem);
  };
  handleSearch = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };
  /* applyFilter = e => {
    const filter = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter);
    });
  }; */
  render() {
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter);
    });
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            name={this.state.name}
            number={this.state.number}
          />

          <h2>Contacts</h2>
          <ContactList
            contacts={this.state.contacts}
            handleDelete={this.handleDelete}
            /* filter={this.applyFilter} */
            filter={filteredContacts}
          />
          <Filter handleSearch={this.handleSearch} />
        </div>
      </>
    );
  }
}

export default Phonebook;
