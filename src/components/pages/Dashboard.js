import CoverChange from "../CoverChange"
import DashboardPost from "../DashboardPost"
import Footer from "../Footer"
import Navbar from "../NavBar"
import Spinner from "../Spinner";

const Dashboard = () => {
    return (
        <>
            <Spinner />
            <Navbar />
            <div className="content blog">
                <CoverChange />
                <DashboardPost />
            </div>
            <Footer />
        </>
    )
}

export default Dashboard