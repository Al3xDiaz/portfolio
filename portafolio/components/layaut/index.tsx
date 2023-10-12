import React from 'react';
import Navbar from "@/components/navbar";
import  Footer  from "@/components/footer";
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