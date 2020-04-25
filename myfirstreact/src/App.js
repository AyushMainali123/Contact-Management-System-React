import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import NavBar from './components/navbar';
import Form from './components/Form';
import Swal from 'sweetalert2'
import {v4 as uuid} from 'uuid'

class App extends Component {
  state  = {
    contact: [
      {
        id: 1,
        name: 'Ayush',
        email: 'ayush@gmail.com',
        phone: 111
      }
    ]
  }
  handleDelete = id => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.setState({
          contact: this.state.contact
          .slice()
          .filter(val => val.id !== id)
        })
        
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
   
  }

  handleSubmittedData = (formData) => {
    const {contact} = this.state;
    // let id = contact.length+1;
    let insetData = {...formData, id: uuid()}
    this.setState({
      contact: [insetData, ...contact]
    })
    
  }

  handleEditedData = (formData) => {
    const {id, name, phone, email} = formData
    let editedData = {id, name, phone, email};
    let newData = this.state.contact.map(data =>
       data.id != id ? data : editedData)
    
    this.setState({
      contact: newData
    })
  }

  render() {
    const {contact} = this.state;
    return ( 
      <div className="App">
        <NavBar 
        title="Contact management system"
        />
        <Form formData = {this.handleSubmittedData}/>
        {contact.map((contact) => 
        <Contact 
        contact = {contact} 
        key={contact.id}
        handleDelete = {this.handleDelete} 
        handleEdit = {this.handleEditedData}
        />)}
        
      </div>
    );
    
  }
}
 
export default App;
