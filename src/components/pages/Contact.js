import ContactBanner from "../../ContactBanner"
import ContactPost from "../ContactPost"
import Footer from "../Footer"
import Navbar from "../NavBar"

const Contact = () => {
    return (
        <div className="content allads">
            <Navbar />
            <ContactBanner />
            <ContactPost />
            <Footer />
        </div>
    )
}


export default Contact