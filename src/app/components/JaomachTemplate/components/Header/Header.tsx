import React from 'react';
import './Header.scss';

const LOGO_LABEL = 'jaomach';
const LOGO_DESCRIPTION = 'una app de irwin eguiluz';

const Header = () => (
  <header className="jaomach__header">
    <div className="jaomach__container">
      <div className="header-logo">
        <img
          src="https://img.icons8.com/material-outlined/24/000000/cash-euro.png"
          className="header-logo__icon"
          alt=""
        />
        <div className="header-logo__text">
          <div className="header-logo__text__label">{LOGO_LABEL}</div>
          <div className="header-logo__text__description">{LOGO_DESCRIPTION}</div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;