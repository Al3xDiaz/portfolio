import React from 'react';
import Navbar from "@/src/components/navbar";
import	Footer	from "@/src/components/footer";
import { NextComponentType, NextPageContext } from 'next';
import StyledJsxRegistry from "@/src/components/jsxStyleRegistry"

interface LayoutProps {
		children: React.ReactNode | any;
}
 const Layout= ({ children }:LayoutProps) => {
	return (
		<StyledJsxRegistry>
			<div className="layout">
				<Navbar	/>
				<main className="main">{children}</main>
				<Footer />
			</div>
		</StyledJsxRegistry>
	);
}
export default Layout;
