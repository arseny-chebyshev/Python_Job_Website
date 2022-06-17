import styles from "./skeleton.module.css";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className={styles.skeleton}
    speed={1}
    width={720}
    height={230}
    viewBox="0 0 720 230"
    backgroundColor="#E0E0E0"
    foregroundColor="#E8E8E8"
    {...props}
  >
    <rect x="0" y="0" rx="15" ry="15" width="720" height="230" />
  </ContentLoader>
);

export { Skeleton };
