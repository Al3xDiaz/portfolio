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
			<div className="layout">
				<Head><title>Portfolio</title></Head>
				<Navbar user={user}	/>
				<main className="main">{children}</main>
				<Footer user={user} />
			</div>
		</StyledJsxRegistry>
	);
}
export default Layout;
