import Categories from "../Categories"
import CategoryBanner from "../CategoryBanner"
import Footer from "../Footer"
import Navbar from "../NavBar"
import Spinner from "../Spinner";

const Category = () => {
    return (
        <>
            <Spinner />
            <Navbar />
            <div className="content allads">
                <CategoryBanner />
                <Categories />
                <Footer />
            </div>
        </>
    )
}

export default Category