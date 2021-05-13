import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';


function RenderListItem({ item }) {
  
  return (
    <Card>
      <Link to={'list/'+item.id}>
        <CardImg width="100%" src={item.image} alt={item.name} />
        <CardImgOverlay>
          <CardTitle> { item.name } </CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}


const ItemsList = (props) => {
  
  if (!props.token) {
    return <Redirect to = "/login" />
  }
  
  const menu = props.items.map((item) => {
    return (
      <div key={item.id} className="col-12 col-md-5 m-1">
        <RenderListItem item={item} />
      </div>
    );
  });
  
  return (
    <div className="container">
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home"> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active> List </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3> List </h3>
          <hr />
        </div>
      </div>
      <div className='row'>
        { menu }
      </div>
    </div>
  );
}

export default ItemsList;