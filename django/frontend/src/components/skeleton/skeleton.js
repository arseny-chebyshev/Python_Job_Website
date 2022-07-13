import styles from "./skeleton.module.css";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => {
  return (
    <ContentLoader
      className={styles.skeleton}
      speed={1}
      width={850}
      height={280}
      viewBox="0 0 850 280"
      foregroundColor="#DCDCDC"
      {...props}
    >
      <rect x="0" y="0" rx="15" ry="15" width="850" height="280" />
    </ContentLoader>
  );
};

export { Skeleton };
