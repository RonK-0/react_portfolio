import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import Logo from "./svg/Logo";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = ({scrollToElement, pos}) => {
  const [showNav, setShowNav] = React.useState(false);
  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <header className={`header ${pos}`}>
        <div className="container">
          <div className="flex between-center">
            <Link to={"/"}>
              <Logo />
            </Link>
            
            <nav className="desktop_nav">
              <ul>
                <Navigation scrollToElement={scrollToElement} />
              </ul>
            </nav>
            
            <div className="mobile_nav">
              <ul className={`${showNav ? 'right-0' : '-right-full'}`}>
                <Navigation scrollToElement={scrollToElement} />
              </ul>
            </div>
            <button type="button" className="burger" onClick={handleShowNav}>
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
