import "./index.css";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
const Layout = () => (
  <div className="layout-container">
    <div className="aaa">
      <Header />
    </div>
    <div>
      <Body />
    </div>

    <div className="footer-container">
      <Footer />
    </div>
  </div>
);
export default Layout;
