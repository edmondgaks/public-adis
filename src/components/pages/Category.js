import Categories from "../Categories"
import CategoryBanner from "../CategoryBanner"
import Footer from "../Footer"
import Navbar from "../NavBar"

const Category = () => {
    return (
        <div className="content allads">
            <Navbar />
            <CategoryBanner />
            <Categories />
            <Footer />
        </div>
    )
}

export default Category