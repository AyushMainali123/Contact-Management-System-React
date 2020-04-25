import React, { Component } from 'react';
import Swal from 'sweetalert2'

class Form extends Component {
    
    state = { 
        name: '',
        phone: '',
        email: '',
        error: {
            name: '',
            phone: '',
            email: ''
        }
     }

    cardHeaderStyling = {
        backgroundColor: 'rebeccapurple',
        color: 'white'
    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;
        if(name === ''){
            this.setState({
                error:{
                    name: 'Please enter your name'
                }
            });
           
            return;
        }
        if(email === ''){
            this.setState({
                error:{
                    email: 'Please enter your email'
                }
            });
            return;
        }
        if(phone === ''){
            this.setState({
                error:{
                    phone: 'Please enter your phone number'
                }
            });
            return;
        }
        this.props.formData(this.state);
        this.setState({
            name: '',
            email: '',
            phone: '',
            error: {}
        })

    }

    render() { 
        let {name, phone, email} = this.state.error;
        return ( 
              <div className="card w-50 mx-auto my-5">
                  <div className="card-header"
                   style= {this.cardHeaderStyling}
                  >
                      <h3>Contact Form</h3>
                  </div>
                  <div className="card-body">
                  <form onSubmit = {this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                         placeholder="Name"
                         name="name"
                        className="form-control"
                        value = {this.state.name}
                        onChange = {this.handleChange}
                        />
                        <span className = "text-danger">{name != '' ? name : null}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                         placeholder="email"
                         name="email"
                        className="form-control"
                        onChange = {this.handleChange}
                        value = {this.state.email}
                        />
                        <span className = "text-danger">{email != '' ? email : null}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="number" 
                        placeholder="phone"
                        name="phone"
                        min="0"
                        className="form-control"
                        onChange = {this.handleChange}
                        value = {this.state.phone}
                        />
                        <span className = "text-danger">{phone != '' ? phone : ''}</span>
                    </div>
                    <button type="submit" className = "btn btn-primary btn-block">Submit</button>
                  </form>
                  </div>
              </div>
         );
    }
}
 
export default Form;