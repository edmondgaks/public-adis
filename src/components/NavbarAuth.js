import { TopBar2 } from "./TopBar";
import React, { useState } from "react";



const NavbarAuth = () => {
    return (
      <div className="background-header">
        <TopBar2 />
        <div className="container">
          <div className="navigation">
            <nav className="navbar navbar-expand-lg justify-content-between nav-color zeropadd">
              <div className="navbar-header">
                <a className="navbar-brand zeropadd" href="/">
                  <img
                    src="img/logo_200x200.png"
                    alt="logo"
                    className="max-width-60px"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/category">
                      Advance Search
                    </a>
                  </li>
                  <DropdownItem
                    title="Categories"
                    subItems={["Jobs", "Properties", "Phones", "Cars", "Rent", "Services"]}
                  />
                  <DropdownItem
                  title="Pages"
                  subItems={["About", "Blog", "Contact Us", "Faq"]}
                />
                  <li className="nav-item">
                    <a className="nav-link" href="/contactus">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/postad">
                      Post Free Ad
                    </a>
                  </li>
                  <li className="nav-item dropdown imagedrops">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span>
                        <img
                          className="max-width-50px rounded-circle"
                          src="img/logo.png"
                          alt="PublicAdisthemes"
                        />
                      </span>
                      PublicAdis<i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu border-0 shadow">
                      <li>
                        <a href="/about-us" className="dropdown-item">
                          <i className="fa fa-dashboard"></i> Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="/blog" className="dropdown-item">
                          <i className="fa fa-sign-out"></i> Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
};
  
const DropdownItem = ({ title, subItems }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <li className={`nav-item dropdown ${isOpen ? "show" : ""}`}>
        <a
          href="#"
          role="button"
          onClick={handleToggle}
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
        >
          {title} <i className="fa fa-angle-down"></i>
        </a>
        <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
          {subItems.map((item, index) => (
            <li key={index}>
              <a href="/category" className="dropdown-item">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  };



export default NavbarAuth