import './Header.scss';
import { cloverPic } from '../../static';

function Header() {
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
