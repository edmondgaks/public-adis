import NewsLetter from "./NewsLetter"

const Footer = () => {
    return (
        <>
            <footer>
                <NewsLetter />
                <div className="background-header footer_padding">
                    <div className="container">
                    <div className="navigation_footer">
                        <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="about-us-info">
                            <p>
                                <img
                                src="img/logo_200x200.png"
                                className="max-width-100px"
                                alt="logo"
                                />
                            </p>
                            <p><i className="fa fa-phone"></i> 123-456-987</p>
                            <p><i className="fa fa-map-marker"></i> LATAM, Perú, Cusco</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Popular Categories</h3>
                            <ul>
                            <li><a href="/category">Properties</a></li>
                            <li><a href="/category">Jobs</a></li>
                            <li><a href="/category">Phones</a></li>
                            <li><a href="/category">Cars</a></li>
                            <li><a href="/category">Rent</a></li>
                            <li><a href="/category">Electronics</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Location</h3>
                            <ul>
                            <li><a href="#">London</a></li>
                            <li><a href="#">Barcelona</a></li>
                            <li><a href="#">New York</a></li>
                            <li><a href="#">France</a></li>
                            <li><a href="#">Lahore</a></li>
                            <li><a href="#">Mumbai</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Important Links</h3>
                            <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about-us">About</a></li>
                            <li><a href="/contactus">Contact Us</a></li>
                            <li><a href="/loginRegister">Login</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/faq">Faqs</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-6 zeropadd">
                                <p>
                                2023 Made with love "PublicAdis" Powered by
                                <i className="fa fa-heart"></i>
                                <a href="#" className="greens">DiverEdu</a>
                                </p>
                            </div>
                            <div className="col-md-6 zeropaddon768">
                                <ul className="pages-links zeropadd">
                                <li><a href="#">Terms &amp; Condition</a></li>
                                <li><a href="dashboard.html">Dashboard</a></li>
                                <li><a href="#">Privacy Policy </a></li>
                                <li><a href="/aboutus">About Us</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer