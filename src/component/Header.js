import * as React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" className="main-header">
      <div className="container">
        <div className="col-md-3">
          <h2 className="neosoft vertical-align-middle">
          <Link to="/"><img alt="Neo-logo" src={require("../assets/images/download.png")} /></Link>
          </h2>
        </div>
        <div className="header-nav desk col-md-9">
          <ul className="top-links">
             <li className="top-heading">
                 Visitor System</li>
            <li className="header-menu">
              <Link to="/addVisitor" className="btn btn-sm gradient-outline-btn">
                Add New Visitor
              </Link>
            </li>
            <li className="header-menu">
              <Link to="/visitorLog" className="btn btn-sm gradient-outline-btn">
                Visitors
              </Link>
            </li>
            {/* <li className={"header-menu " + ((props.hideShowToggle) && "hide")}>
              <DropdownButton id="dropdown-variants-secondary gradient-outline-btn" size="sm" variant="danger" title="Export">
                <Dropdown.Item onClick={props.exportJSON}>JSON Export</Dropdown.Item>
                <Dropdown.Item onClick={createPdfWithProbability}>PDF Export With Probability</Dropdown.Item>
                <Dropdown.Item onClick={createPdfWithoutProbability}>PDF Export Without Probability</Dropdown.Item>
              </DropdownButton>
            </li> */}
            <li className="header-menu">
              <Link to="/LatestNews" className="btn btn-sm gradient-outline-btn">
                News
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Navbar>
  );
};
