import AuthBanner from "../AuthBanner"
import Footer from "../Footer"
import MyAdsPost from "../MyAdsPost"
import Spinner from "../Spinner";
import PostAdHero from "../PostAdHero";
import NavbarAuth from "../NavbarAuth";
const MyAds = () => {
    return (
        <>
            <Spinner />
            <NavbarAuth />
            <div className="content allads">
                <PostAdHero />
                <MyAdsPost />
                <Footer />
            </div>
        </>
    )
}

export default MyAds