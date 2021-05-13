import React from 'react';

function Home (props) {
  
  return(
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-center text-center">
          <h1> Welcome! </h1>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center text-center">
          <img src="assets/images/home.jpg" height="920" width="1024" alt="La Casa restaurant"/>
        </div>
      </div>
    </div>
  );
}

export default Home;