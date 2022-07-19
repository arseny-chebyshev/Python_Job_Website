import {useDispatch} from "react-redux";
import {setRelocation, setRemote,} from "../../core/redux-toolkit/slices/filterSlice";
import {Checkbox} from "../checkbox/checkbox";
import {ModalFilters} from "../modal-filters/modal-filters";
import {SearchField} from "../searchField/searchField";
import {VacancyNumber} from "../vacancyNumber/vacancyNumber";
import styles from "./field-filter.module.css";
import {memo} from "react";
import ButtonFilters from "../buttonFilters/buttonFilters";
import FieldFiltersMobile from "../mobile/field-filters/field-filtersMobile";

const FieldFilter = memo(() => {
    const dispatch = useDispatch();


    return (
        <>
            <div className={styles.root_desktop}>
                <div className={styles.search}>
                    <SearchField/>

                    <div className={styles.buttonFilters}>
                        <ButtonFilters/>
                    </div>

                    <ModalFilters/>

                    <Checkbox
                        keys="remote"
                        clickCheck={(value) => dispatch(setRemote(value))}
                        title={"Удалённая работа"}
                    />
                    <Checkbox
                        keys="relocation"
                        clickCheck={(value) => dispatch(setRelocation(value))}
                        title={"С релокацией"}
                    />
                </div>
                <div>
                    <VacancyNumber/>
                </div>
            </div>

            <div className={styles.root_mobile}>
                <FieldFiltersMobile/>
            </div>
        </>

    );
});
export {FieldFilter};
