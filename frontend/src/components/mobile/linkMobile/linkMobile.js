import React from 'react';
import styles from './linkMobile.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const LinkMobile = ({title,icon,to}) => {
    return (
        <div className={location.pathname === to ? styles.burger_linkWrap_pick:styles.burger_linkWrap}>
            <FontAwesomeIcon icon={icon} className={styles.icon}/>
            <Link className={ styles.burger_link } to={to}>
                {title}
            </Link>

        </div>
    );
};

export default LinkMobile;