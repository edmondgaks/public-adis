import Footer from "../Footer"
import HeroBanner from "../HeroBanner"
import Navbar from "../NavBar"
import PostSection from "../PostSection"
import HomeCategories from "../HomeCategories"

const Home = () => {
    return (
        <div className="content allads">
            <Navbar />
            <HeroBanner />
            <HomeCategories />
            <PostSection />
            <Footer />
        </div>
    )
}

export default Home