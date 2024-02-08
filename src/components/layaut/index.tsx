import React from 'react';
import Navbar from "@/src/components/navbar";
import	Footer	from "@/src/components/footer";
import StyledJsxRegistry from "@/src/components/jsxStyleRegistry"
import { Metadata } from 'next';
import Head from 'next/head';

interface LayoutProps {
		children: React.ReactNode | any;
}
const Layout= ({ children }:LayoutProps) => {
	return (
		<StyledJsxRegistry>
			<div className="layout">
				<Head><title>Portfolio</title></Head>
				<Navbar	/>
				<main className="main">{children}</main>
				<Footer />
			</div>
		</StyledJsxRegistry>
	);
}
export default Layout;
