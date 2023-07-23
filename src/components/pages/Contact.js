import ContactBanner from "../../ContactBanner"
import ContactPost from "../ContactPost"
import Footer from "../Footer"
import Navbar from "../NavBar"
import Spinner from "../Spinner";

const Contact = () => {
    return (
        <>
            <Spinner />
            <Navbar />
            <div className="content allads">
                <ContactBanner />
                <ContactPost />
                <Footer />
            </div>
        </>
    )
}


export default Contact