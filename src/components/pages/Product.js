import Footer from "../Footer"
import Navbar from "../NavBar"
import ProductBanner from "../ProductBanner"
import ProductPost from "../ProductPost"

const Product = () => {
    return (
        <>
            <Navbar />
            <div className="content blog">
                <ProductBanner />
                <ProductPost />
            </div>
            <Footer />
        </>
    )
}

export default Product