import Categories from "../Categories"
import Footer from "../Footer"
import HeroBanner from "../HeroBanner"
import Navbar from "../NavBar"
import PostSection from "../PostSection"

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroBanner />
            <Categories />
            <PostSection />
            <Footer />
        </>
    )
}

export default Home