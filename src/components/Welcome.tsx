import React from "react";

type Props = {};

function Welcome({}: Props) {
  return (
    <div className="w-screen grid place-content-center px-[20%] py-10">
      <h1 className="text-2xl font-bold flex justify-center">
        This is Victory Bible Church Solid Rock Sanctuary
      </h1>
      <span>
        At Victory Bible Solid Rock Sanctuary, we strive to create a welcoming
        and inclusive community where individuals can grow in their and find
        support. Our doors are always open to those seeking spirtual guidance
        and a sense of belonging.
      </span>
    </div>
  );
}

export default Welcome;
