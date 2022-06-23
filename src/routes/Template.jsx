import { useState } from "react";
import { Outlet } from "react-router-dom";

const Template = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Outlet context={[toggle, setToggle]} />
  );
};

export default Template;
