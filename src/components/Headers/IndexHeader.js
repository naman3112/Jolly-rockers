/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React, { useState } from 'react';

// reactstrap components
import { Container,Button,Modal } from "reactstrap";

// core components


function IndexHeader() {
  let[visi,setVisi]=useState(false);
  
  let show12=true;
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/home-page/logo.png") + ")",
            backgroundSize: 'contain',
            backgroundRepeat : 'no-repeat'
         
          }}
      >
        <div className />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              {/* <h1 className="presentation-title">Paper Kit React</h1> */}
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
            
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
        <h6 className="category category-absolute">
       
        <Button size="lg" color="danger" type="button" href="https://docs.google.com/forms/d/1rG6s-kkvsjR6KnRyeTIdIeJCKYHBllime4n9cvmJKeM/edit" target="_blank">
        Want to collab with us?
      </Button>
      
          <a
            href="https://www.creative-tim.com?ref=pkr-index-page"
            target="_blank"
          >
            
          </a>
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
