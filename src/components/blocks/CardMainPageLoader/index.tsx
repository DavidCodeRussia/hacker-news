import ContentLoader from "react-content-loader";

const LonelyNewsLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={309}
    height={450}
    viewBox="0 0 309 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="16" y="17" rx="8" ry="8" width="282" height="168" />
    <rect x="122" y="186" rx="0" ry="0" width="1" height="0" />
    <rect x="16" y="212" rx="8" ry="8" width="282" height="30" />
    <rect x="16" y="270" rx="8" ry="8" width="100" height="14" />
    <rect x="16" y="300" rx="8" ry="8" width="100" height="14" />
    <rect x="148" y="300" rx="8" ry="8" width="94" height="14" />
    <rect x="16" y="330" rx="8" ry="8" width="100" height="14" />
    <rect x="148" y="332" rx="8" ry="8" width="74" height="14" />
    <rect x="16" y="361" rx="8" ry="8" width="100" height="14" />
    <rect x="148" y="360" rx="8" ry="8" width="144" height="14" />
    <rect x="147" y="270" rx="8" ry="8" width="74" height="14" />
  </ContentLoader>
);

export default LonelyNewsLoader;
