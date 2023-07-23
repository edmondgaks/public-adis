import FaqHero from "../FaqHero"
import FaqPost from "../FaqPost"
import Footer from "../Footer"
import Navbar from "../NavBar"
import Spinner from "../Spinner";

const FAQ = () => {
    return (
        <>
            <Spinner />
            <Navbar />
            <div className="content allads">
                <FaqHero />
                <FaqPost />
                <Footer />
            </div>
        </>
    )
}

export default FAQ