import CoverChange from "../CoverChange"
import DashboardPost from "../DashboardPost"
import Footer from "../Footer"
import Navbar from "../NavBar"

const Dashboard = () => {
    return (
        <>
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