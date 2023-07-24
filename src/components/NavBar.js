import React, { useState } from "react";
import TopBar from "./TopBar";

const DropdownMenuItem = ({ title, subMenuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        onClick={toggleMenu}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="nav-link dropdown-toggle"
      >
        {title} <i className="fa fa-angle-down"></i>
      </a>
      {isOpen && (
        <ul className="dropdown-menu border-0 shadow" onClick={toggleMenu}>
          {subMenuItems.map((item) => (
            <li key={item.label}>
              <a href={item.url} className="dropdown-item">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Navbar = () => {
  const [menuItems] = useState([
    { label: "Inicio", url: "/" },
    { label: "Búsqueda avanzada", url: "/category" },
    {
      label: "Categorias",
      subMenuItems: [
        { label: "Trabajos", url: "/category" },
        { label: "Propiedades", url: "/category" },
        {
          label: "Celulares",
          subMenuItems: [
            { label: "Apple", url: "/category" },
            { label: "Samsung", url: "/category" },
            { label: "LG", url: "/category" },
          ],
        },
        {
          label: "Carros",
          subMenuItems: [
            { label: "Toyota", url: "/category" },
            { label: "Suzuki", url: "/category" },
            { label: "Honda", url: "/category" },
          ],
        },
        { label: "Renta", url: "/category" },
        { label: "Servicios", url: "/category" },
      ],
    },
    {
      label: "Páginas",
      subMenuItems: [
        { label: "Info", url: "/about-us" },
        { label: "Blog", url: "/blog" },
        { label: "Contáctanos", url: "/contactus" },
        { label: "Faq", url: "/faq" },
      ],
    },
    { label: "Contáctanos", url: "/contactus" },
    { label: "Login / Registro", url: "/loginRegister" },
    { label: "Anuncia Gratis", url: "/postad" },
  ]);

  return (
    <div className="background-header">
      <TopBar />
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
                {menuItems.map((item) => {
                  if (item.subMenuItems) {
                    return (
                      <DropdownMenuItem
                        key={item.label}
                        title={item.label}
                        subMenuItems={item.subMenuItems}
                      />
                    );
                  } else {
                    return (
                      <li className="nav-item" key={item.label}>
                        <a className="nav-link" href={item.url}>
                          {item.label}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;