import React, { Component } from 'react';
import { TiArrowSortedDown } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEditLine } from "react-icons/ri";

class Contact extends React.Component{

    state = {
        isShowing: true,
        isEditing: false,
        formData: {
            name: this.props.contact.name,
            email: this.props.contact.email,
            phone: this.props.contact.phone,
            error: {
                name: '',
                phone: '',
                email: ''
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowing: !this.state.isShowing
        })
    }

    handleChange = (e) => {

        let newForm = {...this.state.formData};
        newForm[e.target.name] = e.target.value
        this.setState({
            formData: {
                ...newForm
            }
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, phone} = this.state.formData;
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
        this.props.handleEdit({...this.state.formData, id: this.props.contact.id});

        this.setState({
            formData: {
            name: '',
            email: '',
            phone: '',
            error: {
                name: '',
                phone: '',
                email: ''
                }
            }
        })

    }

    formData = () => {

        let {name, phone, email} = this.state.formData.error;
        return(
            <form onSubmit = {this.handleSubmit} className="w-75 mx-auto my-3">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                 placeholder="Name"
                 name="name"
                className="form-control"
                value = {this.state.formData.name}
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
                value = {this.state.formData.email}
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
                value = {this.state.formData.phone}
                />
                <span className = "text-danger">{phone != '' ? phone : ''}</span>
            </div>
            <button type="submit" className = "btn btn-primary btn-block">Submit</button>
          </form>
            )
    }


    content = () => {
        return (
            <div className="card-body">
                
                <ul className="list-group">
                    <div className="list-group-item">
                       {this.props.contact.id}
                    </div>
                       <div className="list-group-item">
                           {this.props.contact.email}
                       </div>
                        <div className="list-group-item">
                           {this.props.contact.phone}
                        </div>
                </ul>
             </div>
        )
    }


    handleEditing = () => {
        this.setState({
            isEditing : !this.state.isEditing
        })
    }
    

    render(){
        let styleCardHeader = {
            backgroundColor: 'rebeccapurple',
            color: 'white',
            fontWeight: 1000,
        }

        let styleArrowHead = {
            marginRight: '.5rem',
            fontSize: '2em',
            transform: 'rotate(0deg)',
            transition: '500ms'
        }

        styleArrowHead.transform =  this.state.isShowing ?
         'rotate(180deg)' : 'rotate(0deg)' 
        
        return (
            
            <div>
                            
               <div className="card my-2 border-success w-50 mx-auto">
                   <div className="card-header d-flex justify-content-between align-items-center" style = {styleCardHeader}>
                    <TiArrowSortedDown 
                    icon = 'spinner'
                    style = {styleArrowHead}
                    onClick = {this.handleShowHide}
                    />
                    {this.props.contact.name}
                    <div className="d-flex justify-content-end">
                        <RiDeleteBin6Line 
                        onClick = {()=>this.props.handleDelete(this.props.contact.id)}
                        className = "mr-3"
                        />
                        <RiEditLine 
                            onClick =  {this.handleEditing}
                        />
                    </div>
                   </div>
                    {this.state.isShowing ? (this.state.isEditing ? this.formData() : this.content()) : null}
               </div>
            </div>
        )
    }
}

export default Contact;