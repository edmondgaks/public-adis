import AuthBanner from "../AuthBanner"
import Footer from "../Footer"
import MyAdsPost from "../MyAdsPost"
import Navbar from "../NavBar"
import Spinner from "../Spinner";
import PostAdHero from "../PostAdHero";
const MyAds = () => {
    return (
        <>
            <Spinner />
            <Navbar />
            <div className="content allads">
                <PostAdHero />
                <MyAdsPost />
                <Footer />
            </div>
        </>
    )
}

export default MyAds