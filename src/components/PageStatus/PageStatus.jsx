import { useEffect, useRef, useState } from "react";

const PageStatus = props => {
  const { pageTitle } = props;
  const [ titleState, setTitleState ] = useState('');
  const statusRef = useRef(null);

  useEffect(() => {
    if (statusRef) {
      setTitleState(pageTitle);
      statusRef.current.focus();
    }

    return () => {
      setTitleState('');
    }
  }, [pageTitle]);

  return (
    <div
      className="continuum-sr-only"
      ref={statusRef}
      role="status"
      tabIndex={-1}
    >
      {`Viewing ${titleState}`}
    </div>
  );
}

export default PageStatus;
