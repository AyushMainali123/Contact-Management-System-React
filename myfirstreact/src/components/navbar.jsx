import React, { Component } from 'react';

class NavBar extends Component {
  
    render() { 
        return ( 
          <nav className="navbar navbar-expand-lg navbar-light bg-light"
          style = {{
            backgroundColor: 'darkred', 
          }}
          >
          <a className="navbar-brand" href="#"
            style = {{
              color: '#222',
              textTransform: 'capitalize'
            }}
          >
            {this.props.title}</a>
        </nav>
        )
  }
} 
 
export default NavBar;
