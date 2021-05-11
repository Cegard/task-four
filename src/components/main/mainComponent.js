import React, { Component } from 'react';
import Home from '../home/homeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    items: state.items,
    loggedIn: state.loggedIn
  };
}

class Main extends Component {
  
  render() {
    
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
