import React, { useState } from "react"
const HomeCategories = () => {
  const [categories] = useState([
    {
      icon: "maida-laptop",
      text: "Laptops",
    },
    {
      icon: "maida-briefcase",
      text: "Empleos",
    },
    {
      icon: "maida-t-shirt",
      text: "Ropa",
    },
    {
      icon: "maida-car-1",
      text: "Carros",
    },
    {
      icon: "maida-calculator",
      text: "Auditors",
    },
    {
      icon: "maida-zoo",
      text: "máscotas",
    },
    {
      icon: "maida-town-hall",
      text: "Finance",
    },
    {
      icon: "maida-art-gallery",
      text: "Art",
    },
    {
      icon: "maida-bar",
      text: "Club",
    },
    {
      icon: "maida-delivery-transport-2",
      text: "Logistics",
    },
    {
      icon: "maida-display",
      text: "Electronicos",
    },
    {
      icon: "maida-case-medic",
      text: "Doctores",
    },
    {
      icon: "fa-film",
      text: "Entretenimiento",
    },
    {
      icon: "maida-soccer",
      text: "Juegos",
    },
    {
      icon: "maida-phone",
      text: "Celulares",
    },
    {
      icon: "F",
      text: "Support",
    },
    {
      icon: "fa-book",
      text: "Libros",
    },
    {
      icon: "fa-child",
      text: "Para niños",
    },
    
  ]);
    return (
      <div className="category-container">
      <div className="container">
        <h2 className="text-center styleh2 karma">
          <a className="greens" href="/category">Categorias</a>
        </h2>
        <div className="cat-icons">
          {categories.map((category, index) => (
            <a href="#" key={index}>
              <div className={`mainicon icon ${category.icon}`}>
                <span className="text-icon">{category.text}</span>
              </div>
            </a>
          ))}
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
    )
}

export default HomeCategories