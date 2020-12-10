import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container, Navbar } from "shards-react";

// import NavbarSearch from "./NavbarSearch";
// import NavbarNav from "./NavbarNav/NavbarNav";
import NavbarToggle from "./NavbarToggle";

const MainNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  

  return (
    <div className={classes}>
      <Container className="p-0" style={{height:'110px'}}>
        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
        <img src="https://user-images.githubusercontent.com/31368033/101733834-73397800-3ae5-11eb-82e1-362e20c81a29.png" style={{objectFit: 'cover',marginTop:'auto',height: '110px'}}/>
        
        <h1 style={{marginTop:'20px'}}>CitiHack</h1>
        
        {/* <span style="font-size: large;">Ministry of  Rural Development </span><span style=" font-size: small;  font-weight: 700;">GOVERNMENT OF INDIA</span>  */}
          {/* <NavbarSearch />
          <NavbarNav /> */}
          <NavbarToggle />
        </Navbar>
      </Container>
    </div>
  );
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: true
};

export default MainNavbar;
