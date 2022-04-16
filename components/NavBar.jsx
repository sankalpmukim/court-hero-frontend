import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import PageLink from './PageLink';
import AnchorLink from './AnchorLink';
import Center from './Center';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Head></Head>
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navigation w-nav">
        <div className="navigation-items">
          <a href="/" aria-current="page" className="logo-link w-nav-brand w--current" aria-label="home">
            <img
              src="https://uploads-ssl.webflow.com/6258fbcd0572e9631b1f7345/6258fbcd0572e9a1ea1f7357_portfolio-logo%402x.png"
              width="104"
              alt=""
              className="logo-image"
            />
          </a>
          <div className="navigation-wrap">
            <nav role="navigation" className="navigation-items w-nav-menu">
              <a href="/" aria-current="page" className="navigation-item w-nav-link w--current">
                Home
              </a>
              <a href="/about" className="navigation-item w-nav-link">
                About
              </a>
              <a href="/styleguide" className="navigation-item w-nav-link">
                Styleguide
              </a>
            </nav>
            <div
              className="menu-button w-nav-button"
              style={{
                '-webkit-user-select': 'text'
              }}
              aria-label="menu"
              role="button"
              tabindex="0"
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false">
              <img
                src="https://uploads-ssl.webflow.com/6258fbcd0572e9631b1f7345/6258fbcd0572e975ea1f7356_menu-icon.png"
                width="22"
                alt=""
                className="menu-icon"
              />
            </div>
          </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
      </div>
    </>
  );
};

export default NavBar;
