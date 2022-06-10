import style from './Header.module.css';
import HeaderMenuItem from '../../components/HeaderMenuItem/HeaderMenuItem';
import {HiOutlineMenu} from "react-icons/hi";
import {FaSearch} from "react-icons/fa";

const Header = () => {
    return (
      <div className={style.container}>
          <div className={style.flex}>
            <HeaderMenuItem>
              <HiOutlineMenu/>
            </HeaderMenuItem> 
            <HeaderMenuItem>
              <FaSearch/>
            </HeaderMenuItem>
            <HeaderMenuItem>
              <FaSearch/>
            </HeaderMenuItem>
            <HeaderMenuItem>
              <FaSearch/>
            </HeaderMenuItem>
          </div>
      </div>
    );
}
 
export default Header;