import { Link } from "react-router-dom";
import "./header.css";

const Header = props => {
  const handleClick = e => {
    const body = document.querySelector('body');
    body.setAttribute('tabindex', '-1');
    body.focus();
  }

  return (
    <header className="continuum-global-header">
      <nav className="continuum-global-nav">
        <Link to="/" onClick={handleClick}>Home</Link>
        <Link to="/invoices" onClick={handleClick}>Invoices</Link>
        <Link to="/expenses" onClick={handleClick}>Expenses</Link>
      </nav>
    </header>
  );
}

export default Header;
