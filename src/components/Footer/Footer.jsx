import {Link} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const date = new Date().getFullYear()

const Footer = () => (
  <footer className="footer">
    <ScrollToTop />
    <div className="copyright">
      Copyright © {date} BITL. All rights reserved
    </div>

    <ul className="terms">
      <li>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </li>
      <li>
        <Link to="/terms-of-use">Terms of Use</Link>
      </li>
    </ul>
  </footer>
)

export default Footer