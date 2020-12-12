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
import React from "react";

// reactstrap components
import { Container,Button } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/home-page/logo.png") + ")",
            backgroundSize: 'contain',
            backgroundRepeat : 'no-repeat'
          // width: "10%",
          // height : "10%"
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
        <Button color="danger" size="lg" >Want to collab with Us?</Button>

         
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
