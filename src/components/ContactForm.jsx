// ContactForm.js
import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddContact = () => {
    const { name, number } = this.state;
    if (name === '' || number === '') {
      alert('Please fill in all fields');
      return;
    }

    this.props.onAddContact({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={this.state.number}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.handleAddContact}>
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
