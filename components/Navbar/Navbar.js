import NavLink from './Link';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-1">
        {renderLogo()}
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderLinks()}
        </ul>
      </div>
    </nav>
  );
};

const renderLogo = () => {
  return (
    <Link prefetch href="/">
      <a>
        <img src="../../static/favicon.ico" alt="Logo" />
      </a>
    </Link>
  );
};

const renderLinks = () => {
  return (
    <div>
      <NavLink prefetch href="/" activeClassName="active">
        <a>Home</a>
      </NavLink>
      <NavLink href="/about" activeClassName="active">
        <a>About</a>
      </NavLink>
    </div>
  );
};

export default Navbar;
