import TopBar from "./TopBar";

const Navbar = () => {
    return (
        <div className="background-header">
            <TopBar />
            <div className="container">
                <div className="navigation">
                <nav
                    className="navbar navbar-expand-lg justify-content-between nav-color zeropadd">
                    <div className="navbar-header">
                    <a className="navbar-brand zeropadd" href="index.html">
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
                        <a className="nav-link" href="/"
                            >Inicio
                            <span className="sr-only">(current)</span>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/category">Búsqueda avanzada</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a
                            href="#"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            className="nav-link dropdown-toggle"
                            >Categorias <i className="fa fa-angle-down"></i></a>
                        <ul className="dropdown-menu border-0 shadow">
                            <li>
                            <a href="/category" className="dropdown-item">Trabajos </a>
                            </li>
                            <li>
                            <a href="/category" className="dropdown-item">Propiedades</a>
                            </li>
                            <li className="dropdown-submenu">
                            <a
                                href="/category"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                className="dropdown-item dropdown-toggle"
                                >celulares</a>
                            <ul className="dropdown-menu border-0 shadow">
                                <li>
                                <a
                                    tabindex="-1"
                                    href="/category"
                                    className="dropdown-item"
                                    >Apple</a>
                                </li>
                                <li>
                                <a href="/category" className="dropdown-item"
                                    >Samsung</a>
                                </li>
                                <li>
                                <a href="/category" className="dropdown-item">LG</a>
                                </li>
                            </ul>
                            </li>
                            <li className="dropdown-submenu">
                            <a
                                href="/category"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                className="dropdown-item dropdown-toggle">Carros</a>
                            <ul className="dropdown-menu border-0 shadow">
                                <li>
                                <a
                                    tabindex="-1"
                                    href="/category"
                                    className="dropdown-item">Toyota</a
                                >
                                </li>
                                <li>
                                <a href="/category" className="dropdown-item"
                                    >Suzuki</a>
                                </li>
                                <li>
                                <a href="/category" className="dropdown-item"
                                    >Honda</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="/category" className="dropdown-item">Renta</a>
                            </li>
                            <li>
                            <a href="/category" className="dropdown-item"
                                >Servicios</a
                            >
                            </li>
                        </ul>
                        </li>

                        <li className="nav-item dropdown">
                        <a
                            href="#"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            className="nav-link dropdown-toggle"
                            >Páginas <i className="fa fa-angle-down"></i></a>
                        <ul className="dropdown-menu border-0 shadow">
                            <li>
                            <a href="/about-us" className="dropdown-item">Info</a>
                            </li>
                            <li><a href="blog" className="dropdown-item">Blog</a></li>
                            <li>
                            <a href="/contactus" className="dropdown-item">Contáctanos</a>
                            </li>
                            <li><a href="/faq" className="dropdown-item">Faq</a></li>
                        </ul>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="/contactus">Contáctanos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/loginRegister"
                            ><i className="fa fa-user" aria-hidden="true"></i>Login /Registro</a>
                        </li>
                        <li className="nav-item bordering">
                        <a className="nav-link" href="/postad">Anuncia Gratis</a>
                        </li>
                    </ul>
                    </div>
                </nav>
                </div>
            </div>
        </div>
    )

}

export default Navbar