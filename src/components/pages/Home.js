import Footer from "../Footer"
import HeroBanner from "../HeroBanner"
import Navbar from "../NavBar"
import PostSection from "../PostSection"
import HomeCategories from "../HomeCategories"
import Spinner from "../Spinner";

const Home = () => {
    return (
        <>
            <Spinner />
            <Navbar />
            <div className="content allads">
                <HeroBanner />
                <HomeCategories />
                <PostSection />
                <Footer />
            </div>
        </>
    )
}

export default Home