import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoader = (props) => (
  <ContentLoader
    speed={2}
    width={350}
    height={400}
    viewBox="0 0 350 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="301" height="275" />
    <rect x="0" y="299" rx="0" ry="0" width="189" height="28" />
    <rect x="0" y="339" rx="0" ry="0" width="83" height="24" />
  </ContentLoader>
);

export default SkeletonLoader;
