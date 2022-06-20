import { Outlet } from "react-router-dom";
import SkipLink from "../components/SkipLink/SkipLink";

const Template = props => {
  const { skipLinkVisible } = props;

  return (
    <>
      <SkipLink skipLinkVisible={skipLinkVisible} />
      <Outlet />
    </>
  );
}

export default Template;
