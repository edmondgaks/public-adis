import Footer from "../Footer"
import Navbar, { Navbar2 } from "../NavBar"
import ProductBanner from "../ProductBanner"
import ProductPost from "../ProductPost"

const Product = () => {
    return (
        <>
            <Navbar2 />
            <div className="content blog">
                <ProductBanner />
                <ProductPost />
            </div>
            <Footer />
        </>
    )
}

export default Product