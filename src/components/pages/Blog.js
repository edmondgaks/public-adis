import BlogHero from "../BlogHero"
import BlogPost from "../BlogPost"
import Footer from "../Footer"
import Navbar from "../NavBar"
import Spinner from "../Spinner";


const Blog = () => {
    return (
        <>
            <Spinner />
            <Navbar />
            <div className="content allads">
                <BlogHero />
                <BlogPost />
                <Footer />
            </div>
        </>
    )
}

export default Blog