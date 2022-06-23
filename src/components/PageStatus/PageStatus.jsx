import { useEffect, useRef, useState } from "react";

const PageStatus = props => {
  const {
    isFocusable = false,
    children,
  } = props;

  const [toggle, setToggle] = useState(false);
  const focusRef = useRef(null);

  useEffect(() => {
    setToggle(toggle => !toggle);
  }, [children]);
  
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
      </div>
    </div>
  );
}

export default PageStatus;
