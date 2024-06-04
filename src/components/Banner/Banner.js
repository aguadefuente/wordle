import React from "react";

//este componente es mas reutilizable
function Banner({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default Banner;
