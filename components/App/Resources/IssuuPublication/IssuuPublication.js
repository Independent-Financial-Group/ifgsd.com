import React from "react";

const IssuuPublication = ({ src }) => {
  return (
    <>
      <div
        style={{
          position: "relative",
          paddingTop: "max(60%,326px)",
          height: "100%",
          width: "100%",
        }}
      >
        <iframe
          allow="clipboard-write"
          sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
          allowfullscreen="true"
          style={{
            position: "absolute",
            border: "none",
            width: "100%",
            height: "100%",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          src={src}
        ></iframe>
      </div>
    </>
  );
};

export default IssuuPublication;
