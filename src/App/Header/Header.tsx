import './Header.scss';
import { useState, useCallback } from "react";

const cloverPic = "/images/clover.png";

function Header() {
  const [hover, setHover] = useState(false);
  const mouseOver = useCallback(() => {}, []);

  return (
    <div className="titleName">
      <div className="clover">
        <img src={cloverPic} />
      </div>
      <h1 className="header1">johnFarina</h1>
    </div>
  );
}

export default Header;
