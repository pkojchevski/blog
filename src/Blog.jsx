import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";

class Blog extends Component {
  state = {
    dropDownOpen: false,
    topic: 1,
  };

  toggle = () => {
    this.setState({
      dropDownOpen: !this.state.dropDownOpen,
    });
  };

  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>WELCOME TO OUR BLOG</h1>

        <div>
          <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle}>
            <DropdownToggle caret>Topic</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link className="footer-links" to="/blog/topic/cultural">
                  Cultural
                </Link>
              </DropdownItem>
              <DropdownItem onClick={this.handleSocial}>
                {" "}
                <Link className="footer-links" to="/blog/topic/social">
                  Social
                </Link>
              </DropdownItem>
              <DropdownItem onClick={this.handleEnvironment}>
                <Link className="footer-links" to="/blog/topic/environment">
                  Environmental
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Blog;
