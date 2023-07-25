import AllAdsBanner from "../AllAdsBanner"
import CategoryBanner from "../CategoryBanner"
import Footer from "../Footer"
import { Navbar2 } from "../NavBar"
import { NewsLetter2 } from "../NewsLetter"

const AllAds = () => {
    return (
        <>
            <Navbar2 />
            <div className="content allads">
                <CategoryBanner />
                <AllAdsBanner />
            </div>
            <NewsLetter2 />
            <Footer />
        </>
    )
}

export default AllAds