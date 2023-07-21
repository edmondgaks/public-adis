import AuthBanner from "../AuthBanner"
import AuthForms from "../AuthForms"
import Footer from "../Footer"
import Navbar from "../NavBar"

const Auth = () => {
    return (
        <>
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