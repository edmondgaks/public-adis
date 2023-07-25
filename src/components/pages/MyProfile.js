import Footer from "../Footer"
import MyProfileBlog from "../MyProfileBlog"
import Spinner from "../Spinner";
import PostAdHero from "../PostAdHero"
import NavbarAuth from "../NavbarAuth";
const MyProfile = () => {
    return (
        <>
            <Spinner />
            <NavbarAuth />
            <div className="content blog">
                <PostAdHero />
                <MyProfileBlog />
                <Footer />
            </div>
        </>
    )
}

export default MyProfile