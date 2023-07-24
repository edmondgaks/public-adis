import AuthBanner from "../AuthBanner"
import AuthForms from "../AuthForms"
import Footer from "../Footer"
import  { Navbar2 } from "../NavBar"
import Spinner from "../Spinner";

const Auth = () => {
    return (
        <>
            <Spinner />
            <Navbar2 />
            <div className="content blog">
                <AuthBanner />
                <AuthForms />
            </div>
            <Footer />
        </>
    )
}

export default Auth