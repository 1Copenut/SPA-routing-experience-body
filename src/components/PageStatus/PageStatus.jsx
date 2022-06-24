import { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";

const PageStatus = props => {
  const {
    isFocusable = false,
    pageTitle,
    role = 'status',
  } = props;

  const [toggle, setToggle] = useOutletContext();
  const focusRef = useRef(null);

  useEffect(() => {
    setToggle(toggle => !toggle);
  }, [setToggle]);
  
  useEffect(() => {
    if (focusRef.current !== null && isFocusable) {
      focusRef.current.focus();
    }
  }, [isFocusable]);

  return (
    /**
     * Intentionally uses two live regions with content updates toggled back and forth.
     * This resolves the problem of duplicate screen reader announcements in rapid succession
     * caused by React's virtual DOM behaviour (https://github.com/nvaccess/nvda/issues/7996#issuecomment-413641709)
     *
     * Adapted from https://github.com/alphagov/accessible-autocomplete/blob/a7106f03150941fc15e6c1ceb0a90e8872fa86ef/src/status.js
     * See also https://github.com/AlmeroSteyn/react-aria-live and https://github.com/dequelabs/ngA11y.
     */
    <div
      className="continuum-sr-only"
      ref={focusRef}
      tabIndex={isFocusable ? -1 : undefined}
    >
      <div
<<<<<<< HEAD
        aria-atomic="true"
        aria-hidden={toggle ? undefined : 'true'}
        aria-live={isFocusable ? 'off' : 'polite'}
        role={role}
      >
        {toggle ? pageTitle : ''}
      </div>
      <div
        aria-atomic="true"
        aria-hidden={!toggle ? undefined : 'true'}
        aria-live={isFocusable ? 'off' : 'polite'}
        role={role}
      >
        {!toggle ? pageTitle : ''}
=======
        role="status"
        aria-live={isFocusable ? 'off' : 'polite'}
        aria-atomic="true"
      >
        {toggle ? children : ''}
      </div>
      <div
        role="status"
        aria-live={isFocusable ? 'off' : 'polite'}
        aria-atomic="true"
      >
        {!toggle ? children : ''}
>>>>>>> 474bc6c90154489109c1b865861a9499ee8ca506
      </div>
    </div>
  );
}

export default PageStatus;
