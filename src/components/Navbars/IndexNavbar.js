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
import React from "react";
// nodejs library that concatenates strings
import { Link } from "react-router-dom";
import classnames from "classnames";
import you from "../../assets/img/home-page/youtube.png"
// reactstrap components
import {

  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar color="danger" className={classnames("fixed-top", "")} expand="lg">
      <Container fluid>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="https://www.youtube.com/c/JollyRockers/videos"
           
          >
            <span style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Jolly Rockers Productions </span>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar >
          <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.youtube.com/channel/UCy_vZXon-cfT0F-KI1cE1MQ"
                target="_blank"
                title="Follow us on Youtube"
                
              >
              <img src={you} style={{height:'20px', width: '30px',margin:'2%'}} />

                <p className="d-lg-none">Youtube</p>
              </NavLink>
            </NavItem>
          <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/JollyRohit1"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/JollyRockersss"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/rohitjolly_jolly_rockers_/"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>     
          <NavItem >
              <NavLink to="/index"   tag={Link}>
                <span style={{fontSize:  '18px', fontWeight: 'bold'}}>Home </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/tracks" tag={Link}>
              <span style={{fontSize:'16px', fontWeight: 'bold'}}>About Us</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/our-work"   tag={Link}>
              <span style={{fontSize:  '17px', fontWeight: 'bold'}}>Our Work</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                to="/tracks/songs"   tag={Link}
                >              
                <span style={{fontSize:  '18px', fontWeight: 'bold'}}>Our Tracks</span>
           </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              target="_blank"
              href="https://docs.google.com/forms/d/1rG6s-kkvsjR6KnRyeTIdIeJCKYHBllime4n9cvmJKeM/viewform?edit_requested=true">
              <span style={{fontSize:  '18px', fontWeight: 'bold'}}>Collaboration</span>
           </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              target="_blank"
              href="https://docs.google.com/forms/d/1VHoHI2LnyjsW5cijIGivZo2n4odSEe26ubifu7nzvKA/viewform?edit_requested=true">
              <span style={{fontSize:  '18px', fontWeight: 'bold'}}>Feedback</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/tracks"   tag={Link} >
              <span style={{fontSize:  '18px', fontWeight: 'bold'}}>Contact Us</span>
              </NavLink>
            </NavItem>

            
            
          
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
