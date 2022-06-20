import styles from "./skeleton.module.css";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => {
  
  return (
    <ContentLoader
      className={styles.skeleton}
      speed={3}
      width={720}
      height={230}
      viewBox="0 0 720 230"
      foregroundColor="green"
      {...props}
    >
      <rect x="0" y="0" rx="15" ry="15" width="720" height="230" />
    </ContentLoader>
  );
};

export { Skeleton };
