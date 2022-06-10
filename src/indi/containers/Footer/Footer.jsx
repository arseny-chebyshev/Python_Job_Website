import style from './Footer.module.css';
import FooterMenuItem from '../../components/FooterMenuItem/FooterMenuItem';
 
const Footer = () => {
    return (
      <div className={style.container}>
          <div className={style.flex}>
            <FooterMenuItem/>
            <FooterMenuItem/>
            <FooterMenuItem/>
            <FooterMenuItem/>
          </div>
      </div>
    );
}
 
export default Footer;