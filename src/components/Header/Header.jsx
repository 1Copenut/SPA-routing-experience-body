import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="continuum-global-header">
      <nav className="continuum-global-nav">
        <Link to="/">Home</Link>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
    </header>
  );
}

export default Header;
