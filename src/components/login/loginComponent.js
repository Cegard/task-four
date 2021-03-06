import React, {Component} from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Redirect } from 'react-router';
import { Button, Label, Row } from 'reactstrap';


const fieldMinLength = (len) => (val) => (val) && (val.length >= len);
const required = (val) => val && val.length;
const validEmail = (val) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(val);
const timeAfterLogin = 1000;

class Login extends Component {


  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkLogingresult = this.checkLogingresult.bind(this);
    this.state = {
      isLoginButtonEnabled: true
    };
  }


  checkLogingresult() {

    setTimeout( () => {
      if (this.props.loggedStatus.token){
        this.props.history.push('/home');
      } else {
        this.setState({isLoginButtonEnabled: true})
      }
    }, timeAfterLogin);
  }


  handleSubmit(values) {
    this.setState({isLoginButtonEnabled: false})
    this.props.loginFunction(values);
    this.checkLogingresult();
  }

  
  render() {
    
    if (this.props.loggedStatus.token){
      return <Redirect to = "/home" />
    }

    return (

      <div className="container">
        
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        
          <Row className='row'>
            <Label htmlFor="email" md={2}> Email </Label>
          </Row>

          <Row className='row'>
            <Control model=".email" type="email" id="email" name="email"
                className="form-control"
                validators={{
                  required,
                  validEmail
                }} />
            <Errors className="text-danger" model=".email" show="touched"
                messages={{
                  required: "This field is required",
                  validEmail: "Must to be an email"
                }} />
          </Row>
        
          <Row className='row'>
            <Label htmlFor="password" md={2}> Password </Label>
          </Row>

          <Row className='row'>
            <Control model=".password" type="password" id="password" name="password"
                className="form-control"
                validators={{
                  required,
                  minLength: fieldMinLength(8),
                }} />
            <Errors className="text-danger" model=".password" show="touched"
                messages={{
                  required: "This field is required",
                  minLength: "The password requires 8 characters or more"
                }} />
          </Row>
          <Row className="row">
            <Button type="submit" color="primary" disabled={!this.state.isLoginButtonEnabled} > Submit </Button>
          </Row>
        </LocalForm>
      </div>
    );
  }
}


export default Login;