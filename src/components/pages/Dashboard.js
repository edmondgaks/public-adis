import CoverChange from "../CoverChange"
import DashboardPost from "../DashboardPost"
import Footer from "../Footer"
import NavbarAuth from "../NavbarAuth";
import Spinner from "../Spinner";

const Dashboard = () => {
    return (
        <>
            <Spinner />
            <NavbarAuth />
            <div className="content blog">
                <CoverChange />
                <DashboardPost />
            </div>
            <Footer />
        </>
    )
}

export default Dashboard