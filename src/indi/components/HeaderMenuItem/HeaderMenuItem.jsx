import style from './HeaderMenuItem.module.css';


const HeaderMenuItem = ({children}) => {
  return (
    <div className={style.menuItem  }>    
			{children}
    </div>
  );
}
 
export default HeaderMenuItem;