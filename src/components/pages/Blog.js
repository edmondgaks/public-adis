import BlogHero from "../BlogHero"
import BlogPost from "../BlogPost"
import Footer from "../Footer"
import Navbar from "../NavBar"

const Blog = () => {
    return (
        <div className="content allads">
            <Navbar />
            <BlogHero />
            <BlogPost />
            <Footer />
        </div>
    )
}

export default Blog