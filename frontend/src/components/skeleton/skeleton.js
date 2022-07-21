import styles from "./skeleton.module.css";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => {
  return (
    <ContentLoader
      className={styles.skeleton}
      speed={1}

      foregroundColor="#DCDCDC"
      {...props}
    >
      <rect  width="850" height="240" />
    </ContentLoader>
  );
};

export { Skeleton };
