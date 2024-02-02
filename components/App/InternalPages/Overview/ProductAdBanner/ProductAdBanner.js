import React from "react";

const ProductAdBanner = ({ url }) => {
  return (
    <a
      href="https://www.sealynet.com/"
      rel="noopener"
      target="_blank"
      className="col-span-12 block"
    >
      <img src={url} alt="product ad banner" className="rounded-lg shadow-lg" />
    </a>
  );
};

export default ProductAdBanner;
