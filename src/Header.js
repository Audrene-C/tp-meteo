import React from 'react';
import LogoImg from './assets/logo_transparent.png';

const Header = () => {
  return (
    <header className="App-header">
        <img src={LogoImg} className="App-logo" alt="logo" />
    </header>
  );
}

export default Header;