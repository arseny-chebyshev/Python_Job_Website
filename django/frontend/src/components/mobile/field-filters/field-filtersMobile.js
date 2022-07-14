import styles from './field-filtersMobile.module.scss'
import {SearchField} from "../../searchField/searchField";
import {VacancyNumber} from "../../vacancyNumber/vacancyNumber";
import {ModalFilters} from "../../modal-filters/modal-filters";
import ButtonFilters from "../../buttonFilters/buttonFilters";

const FieldFiltersMobile = () => {
    return (
        <div className={styles.wrap}>
            <div><SearchField/></div>
            <div className={styles.line_two}>
                <VacancyNumber/>
                <div ><ButtonFilters/></div>
            </div>
            <ModalFilters/>
        </div>
    );
};

export default FieldFiltersMobile;