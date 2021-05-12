import React, { Component } from 'react';
import Home from '../home/homeComponent';
import Login from '../login/loginComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGIN_REQUEST, LOGGED_OUT } from '../../actions/actionTypes';


const mapStateToProps = state => {
  
  return {
    items: state.items,
    loggedIn: state.loggedIn || {status: LOGGED_OUT, token: ""}
  };
}


const mapDispatchToProps = (dispatch) => {

  return {
    login: credentials => dispatch({type: LOGIN_REQUEST, payload: credentials}),
    logout: () => dispatch({type: LOGGED_OUT}),
  };
}


class Main extends Component {

  componentDidMount() {
    //loadItems
  }
  
  render() {
    
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={() => <Login loginFunction = {this.props.login} token = {this.props.loggedIn.token} />} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
