import React from 'react';
import Navbar from "src/components/navbar";
import  Footer  from "src/components/footer";
import { NextComponentType, NextPageContext } from 'next';

interface LayoutProps {
    children: React.ReactNode | any;
}
 const Layout= ({ children }:LayoutProps) => {
  return (
    <div className="layout">
      <Navbar  />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;