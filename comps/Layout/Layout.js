import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.css"
const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div id="body" className={classes.layoutBody}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;