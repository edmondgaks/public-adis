import ContactBanner from "../../ContactBanner"
import ContactPost from "../ContactPost"
import Footer from "../Footer"
import  { Navbar2 } from "../NavBar"
import Spinner from "../Spinner";

const Contact = () => {
    return (
        <>
            <Spinner />
            <Navbar2 />
            <div className="content allads">
                <ContactBanner />
                <ContactPost />
                <Footer />
            </div>
        </>
    )
}


export default Contact