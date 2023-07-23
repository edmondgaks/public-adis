import AuthBanner from "../AuthBanner"
import AuthForms from "../AuthForms"
import Footer from "../Footer"
import Navbar from "../NavBar"
import Spinner from "../Spinner";

const Auth = () => {
    return (
        <>
            <Spinner />
            <Navbar />
            <div className="content blog">
                <AuthBanner />
                <AuthForms />
            </div>
            <Footer />
        </>
    )
}

export default Auth