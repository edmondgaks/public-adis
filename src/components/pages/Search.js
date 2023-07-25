import CategoryBanner from "../CategoryBanner"
import Footer from "../Footer"
import { Navbar2 } from "../NavBar"
import { NewsLetter2 } from "../NewsLetter"
import SearchBanner from "../SearchBanner"

const Search = () => {
    return (
        <>
            <Navbar2 />
            <div className="content allads">
                <CategoryBanner />
                <SearchBanner />
            </div>
            <NewsLetter2 />
            <Footer />
        </>
    )
}

export default Search