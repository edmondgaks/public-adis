import FaqHero from "../FaqHero"
import FaqPost from "../FaqPost"
import Footer from "../Footer"
import Navbar from "../NavBar"

const FAQ = () => {
    return (
        <div className="content allads">
            <Navbar />
            <FaqHero />
            <FaqPost />
            <Footer />
        </div>
    )
}

export default FAQ