import { memo } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <span className="index">Home</span>
      </Link>
      <Link to="/page/1">
        <span className="page-number">1</span>
      </Link>{" "}
      <Link to="/page/2">
        <span className="page-number">2</span>
      </Link>{" "}
      <Link to="/page/3">
        <span className="page-number">3</span>
      </Link>{" "}
      <Link to="/page/4">
        <span className="page-number">4</span>
      </Link>
      {/* <input type="text" className="serach" placeholder="Tìm kiếm" /> */}
    </div>
  );
}
export default memo(Header);
