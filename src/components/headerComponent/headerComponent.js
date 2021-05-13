import React, { Component } from 'react';
import { Navbar, Nav, NavbarToggler,
         Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  

  constructor(props) {
    super(props);
    
    this.state = {
      isNavOpen: false
    };
    
    this.toggleNav = this.toggleNav.bind(this);
    
  }
  

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }
  

  render() {

    const login = !this.props.token ? 

    (<Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink className="nav-link" to="/login">
          <span className="fa fa-sign-in fa-lg"></span> Login
        </NavLink>
      </NavItem>
    </Nav>) : <React.Fragment></React.Fragment>;

    return(
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"> Home </span>
                  </NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink className="nav-link" to="/list">
                    <span className="fa fa-list fa-lg"> Menu </span>
                  </NavLink>
                </NavItem>
                {login}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1> Ristorante La Casa </h1>
                <p> We take inspiration from the World's best cousines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}


export default Header;