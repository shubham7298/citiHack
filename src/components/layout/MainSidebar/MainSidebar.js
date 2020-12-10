import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col } from "shards-react";

import SidebarMainNavbar from "./SidebarMainNavbar";
import SidebarSearch from "./SidebarSearch";
import SidebarNavItems from "./SidebarNavItems";

import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

import { Store } from "../../../flux";

class MainSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      AssetMenuVisible: true,
      TriggerMenuVisible: false,
      sidebarNavItems: Store.getSidebarItems(),
      visible: false
    };

    this.toggleAssetActions = this.toggleAssetActions.bind(this);
    this.toggleTriggerActions = this.toggleTriggerActions.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toggleAssetActions() {
    this.setState({
      AssetMenuVisible: !this.state.AssetMenuVisible
    });
  }
  toggleTriggerActions() {
    this.setState({
      TriggerMenuVisible: !this.state.TriggerMenuVisible
    });
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      menuVisible: Store.getMenuState(),
      sidebarNavItems: Store.getSidebarItems()
    });
  }

  render() {
    const classes = classNames(
      "main-sidebar",
      "px-0",
      "col-12",
      this.state.menuVisible && "open"
    );

    return (
      <>
      {/* <Link to="/home">hello</Link> */}
      <Col
        tag="aside"
        className={classes}
        lg={{ size: 2 }}
        md={{ size: 3 }}
      >
      
        <SidebarMainNavbar hideLogoText={this.props.hideLogoText} />
        <SidebarSearch />
        <SidebarNavItems />

        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3" >
        <i class="fa fa-caret-down" aria-hidden="true"></i><span onClick={this.toggleAssetActions} className="d-none d-md-inline-block" style={{cursor:'pointer'}}>Asset Classes</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.AssetMenuVisible}>
          <DropdownItem tag={Link} to="stocks">
            <i className="material-icons">&#xE7FD;</i> Stocks
          </DropdownItem>
          <DropdownItem tag={Link} to="bonds">
            <i className="material-icons">&#xE8B8;</i> Bonds
          </DropdownItem>
          <DropdownItem tag={Link} to="marketsec">
            <i className="material-icons">&#xE2C7;</i> Market Securities
          </DropdownItem>
          <DropdownItem tag={Link} to="commos">
            <i className="material-icons">&#xE896;</i> Commodities
          </DropdownItem>
          <DropdownItem tag={Link} to="real-estate">
            <i className="material-icons">&#xE896;</i> Real Estate
          </DropdownItem>
          <DropdownItem tag={Link} to="altInvestment">
            <i className="material-icons">&#xE896;</i> Alternative Investments
          </DropdownItem>
          <DropdownItem divider />
          {/* <DropdownItem tag={Link} to="/" className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem> */}
        </Collapse>
        <div style={{display:this.state.AssetMenuVisible?'block':'none'}}><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3" >
        <i class="fa fa-caret-down" aria-hidden="true"></i><span onClick={this.toggleTriggerActions} className="d-none d-md-inline-block" style={{cursor:'pointer'}}>Major Triggers</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.TriggerMenuVisible}>
          <DropdownItem tag={Link} to="demog">
            <i className="material-icons">&#xE7FD;</i> Demographics
          </DropdownItem>
          <DropdownItem tag={Link} to="environments">
            <i className="material-icons">&#xE8B8;</i> Environments
          </DropdownItem>
          <DropdownItem tag={Link} to="economy">
            <i className="material-icons">&#xE2C7;</i> Economy
          </DropdownItem>
          <DropdownItem tag={Link} to="tech">
            <i className="material-icons">&#xE896;</i> Technology
          </DropdownItem>
          <DropdownItem tag={Link} to="politics">
            <i className="material-icons">&#xE896;</i> Politics 
          </DropdownItem>
          <DropdownItem tag={Link} to="culture">
            <i className="material-icons">&#xE896;</i> Culture
          </DropdownItem>
          <DropdownItem divider />
          {/* <DropdownItem tag={Link} to="/" className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem> */}
        </Collapse>
        
        
      </Col>
      </>
    );
  }
}

MainSidebar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

MainSidebar.defaultProps = {
  hideLogoText: false
};

export default MainSidebar;
