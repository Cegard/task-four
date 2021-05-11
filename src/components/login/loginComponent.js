import React, {Component} from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, Label, Row } from 'reactstrap';


const fieldMinLength = (len) => (val) => (val) && (val.length >= len);


class Login extends Component {


  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit() {

  }

  
  render() {
    
    return (

      <div className="container">
        
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        
          <Row className='row'>
            <Label htmlFor="email" md={2}> Email </Label>
          </Row>

          <Row className='row'>
            <Control.text model=".email" type="email" id="email" name="email"
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
                  minLength
                }} />
            <Errors className="text-danger" model=".password" show="touched"
                messages={{
                  required: "This field is required",
                  minLength: fieldMinLength(8),
                }} />
          </Row>
          <Row className="row">
            <Button type="submit" color="primary"> Submit </Button>
          </Row>
        </LocalForm>
      </div>
    );
  }
}


export default Login;