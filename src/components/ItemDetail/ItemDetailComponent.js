import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Card, CardImg, CardText, CardBody, Button,
         CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

function RenderItem({ item }) {
  
  return (
    <Card>
      <CardImg width="100%" src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle> {item.name} </CardTitle>
        <CardText> {item.description} </CardText>
      </CardBody>
    </Card>
  );
}


class ItemDetail extends Component {


  constructor(props) {
    super(props);

    this.submitItem = this.submitItem.bind(this);

    this.state = {
      isSubmitted: props.item.submitted
    }
  }


  submitItem() {
    
    if (!this.isSubmitted){
      this.props.item.submitted = true;
      this.setState({isSubmitted: true});
    }
  }


  render() {
    
    if (!this.props.token) {
      return <Redirect to = "/login" />
    }
    
    let listElement = (
      <div></div>
    );

    let buttonLabel = this.state.isSubmitted ? 'Already submitted' : 'Submit';
    
    if (this.props.item) {
      listElement = (
        <div className="container">
          <div className='row'>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/list"> list </Link>
              </BreadcrumbItem>
              <BreadcrumbItem active> {this.props.item.name} </BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3> {this.props.item.name} </h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderItem item={this.props.item} />
            </div>
            <div className="col-12 col-md-5 m-1">
              <Button color="primary" onClick={this.submitItem} disabled={this.state.isSubmitted}> {buttonLabel} </Button>
            </div>
          </div>
        </div>
      );
    }
    
    return listElement;
  }
}


export default ItemDetail;