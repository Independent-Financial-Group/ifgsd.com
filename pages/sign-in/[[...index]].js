import React from "react";
import { SignIn } from "@clerk/nextjs";

const index = () => {
  return (
    <>
      <div className="relative h-[100vh] bg-[url(/sign-in/bg-coronado-compressed.jpg)] bg-cover bg-no-repeat">
        <SignIn
          appearance={{
            elements: {
              rootBox:
                "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
              logoBox: "justify-center",
              logoImage: "!max-w-[200px] !h-auto",
            },
          }}
        />
      </div>
    </>
  );
};

export default index;
