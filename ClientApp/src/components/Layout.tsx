import React from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => (
  <div>
    <NavMenu />
    <Container tag='main'>{children}</Container>
  </div>
);
