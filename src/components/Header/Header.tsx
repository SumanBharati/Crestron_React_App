import React from 'react';
import DateTime from './DateTime/DateTime';
import TitleBar from './TitleBar/TitleBar';

const Header = () => {
  return (
    <>
        <TitleBar />
        <DateTime />
    </>
  )
}

export default Header