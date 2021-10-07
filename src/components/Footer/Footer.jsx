import {Link} from "react-router-dom";

const date = new Date().getFullYear()

const Footer = () => (
  <footer className="footer">
    <div className="copyright">
      Copyright © {date} BITL. All rights reserved
    </div>

    <ul className="terms">
      <li>
        <Link href="#">Privacy Policy</Link>
      </li>
      <li>
        <Link href="#">Terms of Use</Link>
      </li>
    </ul>
  </footer>
)

export default Footer