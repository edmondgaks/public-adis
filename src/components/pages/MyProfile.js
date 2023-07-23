import Footer from "../Footer"
import MyProfileBlog from "../MyProfileBlog"
import Navbar from "../NavBar"
import AuthBanner from "../AuthBanner"
import Spinner from "../Spinner";
import PostAdHero from "../PostAdHero"
const MyProfile = () => {
    return (
        <>
            <Spinner />
            <Navbar />
            <div className="content blog">
                <PostAdHero />
                <MyProfileBlog />
                <Footer />
            </div>
        </>
    )
}

export default MyProfile