import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
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

const ItemDetail = (props) => {
  
  let listElement = (
    <div></div>
  );
  console.log(props.item)
  if (props.item != null) {
      listElement = (
        <div className="container">
          <div className='row'>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/list"> list </Link>
              </BreadcrumbItem>
              <BreadcrumbItem active> {props.item.name} </BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3> {props.item.name} </h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderItem item={props.item} />
            </div>
          </div>
        </div>
      );
  }
  
  return listElement;
}


export default ItemDetail;