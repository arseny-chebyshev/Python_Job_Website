import styles from "./pagination.module.css";
import ReactPaginates from "react-paginate";
import {useSelector} from "react-redux";
import {changePage} from "../../core/redux-toolkit/slices/paginationSlice";
import {useDispatch} from "react-redux";

const Pagination = () => {
    const page_count = useSelector((state) => state.vacansies.page_count);

    const dispatch = useDispatch();

    const change = (event) => {
        dispatch(changePage(event.selected + 1));
        window.scrollTo(0, 0)
    }
    return (
        <div className={styles.root}>
            <ReactPaginates
                className={page_count === 1 ? styles.pagHidden : styles.pag}
                breakLabel="..."
                marginPagesDisplayed ={2}
                nextLabel=">"
                onPageChange={(event) => change(event)}
                pageRangeDisplayed={1}
                pageCount={page_count}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};
export {Pagination};
