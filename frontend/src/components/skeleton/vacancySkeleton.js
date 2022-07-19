import ContentLoader from "react-content-loader";

const VacancySkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={"100%"}
      height={1000}
      backgroundColor="#E0E0E0"
      foregroundColor="#E8E8E8"
    >
      <rect x="0" y="2" rx="4" ry="4" width="500" height="45" />
      <rect x="0" y="75" rx="4" ry="4" width="300" height="25" />
      <rect x="0" y="130" rx="4" ry="4" width="200" height="25" />
      <rect x="0" y="185" rx="4" ry="4" width="1070" height="0" />
      <rect x="0" y="335" rx="4" ry="4" width="200" height="25" />
      <rect x="0" y="390" rx="4" ry="4" width="100%" height="120" />
      <rect x="0" y="590" rx="4" ry="4" width="100%" height="520" />
      <rect x="0" y="990" rx="4" ry="4" width="100%" height="520" />
    </ContentLoader>
  );
};

export { VacancySkeleton };
