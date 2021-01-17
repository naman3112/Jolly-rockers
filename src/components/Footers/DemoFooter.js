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
import { Link } from "react-router-dom";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black bg-danger">
      <Container >
        <Row >
          <nav className="footer-nav " style={{textColor: 'white'}}>
            <ul>
              <li>
                <a
                
                  href="/index"
                >
                  Home 
                </a>
              </li>
              <li>
                <a
                  href="/tracks/songs"
                  
                >
                  Our tracks
                </a>
              </li>
              <li>
                <a
                  href="/tracks"
                >
                  About Us
                </a>
               
              </li>
              <li>
                <a
                
                  href="/our-works"
                >
                  Our Work
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
         
             
            <span className="copyright">
            <a className="copyright-name" href="https://www.linkedin.com/in/naman-arora-462465139/">
              
              © {new Date().getFullYear()}, made by Naman Arora{" "}
              </a>
             
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
