import styles from "./pagination.module.css";
import ReactPaginate from 'react-paginate'
const  Pagination = () => {
 return <ReactPaginates
 pageClassName={styles.pagination}
 breakLabel="..."
 nextLabel=">"
 onPageChange={(event) = console.log(event)}
 pageRangeDisplayed={5}
 pageCount={3}
 previousLabel="<"
 renderOnZeroPageCount={null}
/>;
};
export { Pagination };