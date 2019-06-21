import React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from 'routing';
import { styled } from '@diegofrayo/styles';

const Header = () => (
  <Container>
    Header
    <nav>
      <ul>
        <MenuItem>
          <Link to={Routes.HOME} href={Routes.HOME}>
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={Routes.ABOUT} href={Routes.ABOUT}>
            About
          </Link>
        </MenuItem>
      </ul>
    </nav>
  </Container>
);

const Container = styled('header')(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: 'black',
  color: 'white',
  display: 'flex',
  flex: 0,
  minHeight: theme.headerHeight,
  padding: `0 ${theme.spacing.medium}`,
}));

const MenuItem = styled('li')(({ theme }) => ({
  display: 'inline-block',
  margin: `0 ${theme.spacing.base}`,
}));

export default Header;
