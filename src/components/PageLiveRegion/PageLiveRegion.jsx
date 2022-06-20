import { useEffect, useState } from "react";

const PageLiveRegion = props => {
  const { pageTitle } = props;
  const [ titleState, setTitleState ] = useState('');

  useEffect(() => {
    setTitleState(pageTitle);

    return () => {
      setTitleState('');
    }
  }, [pageTitle]);

  return (
    <div
      aria-atomic="true"
      aria-live="polite"
      aria-relevant="text additions"
      className="continuum-sr-only"
      role="status"
    >
      {`Viewing ${titleState}`}
    </div>
  );
}

export default PageLiveRegion;
