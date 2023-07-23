import AboutHero from "../AboutHero"
import AboutPost from "../AboutPost"
import Footer from "../Footer"
import Navbar from "../NavBar"
import Spinner from "../Spinner";

const AboutUs = () => {
    return (
        <>
            <Spinner />
            <Navbar />
            <div className="content allads">
                <AboutHero />
                <AboutPost />
                <Footer />
            </div>
        </>
    )
}

export default AboutUs