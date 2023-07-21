import "../App.css";
import NewsLetter from "./NewsLetter"

const Footer = () => {
    return (
        <>
            <footer>
                <NewsLetter />
                <div class="background-header footer_padding">
                    <div class="container">
                    <div class="navigation_footer">
                        <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="about-us-info">
                            <p>
                                <img
                                src="img/logo_200x200.png"
                                class="max-width-100px"
                                alt="logo"
                                />
                            </p>
                            <p><i class="fa fa-phone"></i> 123-456-987</p>
                            <p><i class="fa fa-map-marker"></i> LATAM, Perú, Cusco</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <h3>Popular Categories</h3>
                            <ul>
                            <li><a href="category.html">Properties</a></li>
                            <li><a href="category.html">Jobs</a></li>
                            <li><a href="category.html">Phones</a></li>
                            <li><a href="category.html">Cars</a></li>
                            <li><a href="category.html">Rent</a></li>
                            <li><a href="category.html">Electronics</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
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
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <h3>Important Links</h3>
                            <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="aboutus.html">About</a></li>
                            <li><a href="contactus.html">Contact Us</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="faq.html">Faqs</a></li>
                            </ul>
                        </div>
                        </div>
                        <div class="footer-bottom">
                        <div class="container">
                            <div class="row">
                            <div class="col-md-6 zeropadd">
                                <p>
                                2023 Made with love "PublicAdis" Powered by
                                <i class="fa fa-heart"></i>
                                <a href="#" class="greens">DiverEdu</a>
                                </p>
                            </div>
                            <div class="col-md-6 zeropaddon768">
                                <ul class="pages-links zeropadd">
                                <li><a href="#">Terms &amp; Condition</a></li>
                                <li><a href="dashboard.html">Dashboard</a></li>
                                <li><a href="#">Privacy Policy </a></li>
                                <li><a href="#">About Us</a></li>
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