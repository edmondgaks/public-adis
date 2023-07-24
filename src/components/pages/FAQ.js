import FaqHero from "../FaqHero"
import FaqPost from "../FaqPost"
import Footer from "../Footer"
import  { Navbar2 } from "../NavBar"
import Spinner from "../Spinner";

const FAQ = () => {
    return (
        <>
            <Spinner />
            <Navbar2 />
            <div className="content allads">
                <FaqHero />
                <FaqPost />
                <Footer />
            </div>
        </>
    )
}

export default FAQ