import Footer from "../Footer"
import  { Navbar2 } from "../NavBar"
import NavbarAuth from "../NavbarAuth"
import { NewsLetter2 } from "../NewsLetter"
import PostAdsBanner from "../PostAdsBanner"

const PostAds = () => {
    return (
        <>
            <NavbarAuth />
            <PostAdsBanner />
            <NewsLetter2 />
            <Footer />
        </>
    )
}

export default PostAds