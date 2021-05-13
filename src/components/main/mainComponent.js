import { Router, Switch, Route, Redirect, withRouter, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGIN_REQUEST, LOGGED_OUT } from '../../actions/actionTypes';
import { initialState } from '../../reducers/initialState';
import React from 'react';
import Home from '../home/homeComponent';
import Login from '../login/loginComponent';
import ItemsList from '../itemsList/itemsListComponent';
import ItemDetail from '../ItemDetail/ItemDetailComponent'


const mapStateToProps = (state) => {

  return {
    items: state.userRole.items || initialState.items,
    loggedIn: state.userRole.loggedIn || initialState.loggedIn
  };
}


const mapDispatchToProps = (dispatch) => {

  return {
    login: credentials => dispatch({type: LOGIN_REQUEST, payload: credentials}),
    logout: () => dispatch({type: LOGGED_OUT}),
  };
}


const Main = (props) => {
    const history = useHistory();

    
    const ItemWithId = ({ match }) => {
      return (
        <ItemDetail
          item={props.items.filter((item) => item.id === parseInt(match.params.itemId))[0]}
        />
      );
    };
    

    return (
      <div>
        <Router history={history} token = {props.loggedIn.token}>
          <Switch>
            <Route path="/home" component={() => <Home token={props.loggedIn.token} />} />
            <Route
              path="/login" 
              component={() => <Login loginFunction = {props.login} loggedStatus = {props.loggedIn}
                  history = {history}
              />}
            />
            <Route exact path="/list" component={() => <ItemsList items={props.items} />} />
            <Route path="/list/:itemId" component={ItemWithId} />
            <Redirect to="/home" />
          </Switch>
        </Router>
      </div>
    );
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
