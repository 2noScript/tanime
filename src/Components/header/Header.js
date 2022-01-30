import { memo } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <span className="index">Home</span>
      </Link>

      {/* <input type="text" className="serach" placeholder="Tìm kiếm" /> */}
    </div>
  );
}
export default memo(Header);
