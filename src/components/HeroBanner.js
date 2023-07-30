import React , { useState } from "react";
const HeroBanner = () => {
  const [popularSearches, setPopularSearches] = useState([
    'locales',
    'Autos',
    'Departamentos',
    'Alquiler',
    'Empleos',
    'Venta',
    'Traspaso',
    'Terrenos',
    'Ropa',
    'Casas',
    'abogado',
    'Restaurante',
  ]);
    return (
      <div className="hero-homepage">
        <div className="container wrapping-content">
          <div className="row">
            <div className="col-12 text-center">
              <div className="tagline">
                <h1>Anuncios y avisos clasificados</h1>
                <h2>Encuentra todo lo que buscas cerca de ti .</h2>
              </div>
              <div className="search_form">
                <form className="row">
                  <div className="form-group col-lg-4 col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="¿Qué estás buscando?"
                    />
                  </div>
                  <div className="form-group col-lg-4 col-sm-12">
                    <select className="form-control">
                      <option>Todas las Categorias</option>
                      <option>Carros</option>
                      <option>Inmuebles</option>
                      <option>Trabajos</option>
                      <option>Alquiler</option>
                      <option>Servicios</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-4 col-sm-12">
                    <button type="submit" className="custom-button">Buscar</button>
                  </div>
                </form>
              </div>
              <div className="popular_searches">
                Búsquedas populares:
                {popularSearches.map((searchTerm, index) => (
                  <a key={index} href="#">
                    {searchTerm} , 
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HeroBanner