import React from 'react';
import Navbar from "@/src/components/navbar";
import	Footer	from "@/src/components/footer";
import StyledJsxRegistry from "@/src/components/jsxStyleRegistry"
import { Metadata } from 'next';
import Head from 'next/head';
import { IUser } from '@/src/models';

interface LayoutProps {
	children: React.ReactNode | any;
  user?: IUser;
}
const Layout= ({ children,user }:LayoutProps) => {
	return (
		<StyledJsxRegistry>
      <Navbar user={user}	/>
      <div className="layout">
        <main className="main">{children}</main>
      </div>
      <Footer user={user} />
		</StyledJsxRegistry>
	);
}
export default Layout;
