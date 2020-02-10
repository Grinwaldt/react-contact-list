import React, { Component } from 'react';
import CardList from './components/cardList.js';
import SearchBox from './components/searchBox.js';
import './App.css';
import "react-bootstrap/dist/react-bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('http://private-05627-frontendnewhire.apiary-mock.com/contact_list')
      .then(response => response.json())
      .then(users => {
        this.setState({ contacts: users });
      });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { contacts, searchfield } = this.state;
    const filteredcontacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !contacts.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="appContent">
        <header className="header">
          <div className="row row-header" >
          <h3 className="col-md-8" >Contact List</h3>
         <SearchBox className="col-md-4" searchChange={this.onSearchChange} /> 
        </div>
        </header>
        <CardList contacts={filteredcontacts} /> 
      </div>
    );
  }
}

export default App;

