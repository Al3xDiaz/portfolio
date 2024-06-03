import React from 'react';
import Navbar from "@/src/components/navbar";
import	Footer	from "@/src/components/footer";
import StyledJsxRegistry from "@/src/components/jsxStyleRegistry";
import { IUser } from '@/src/models';

interface LayoutProps {
	children: React.ReactNode | any;
  user?: IUser;
}
const Layout= ({ children,user }:LayoutProps) => {
	return (
		<StyledJsxRegistry>
      <div className="layout">
        <Navbar user={user}	/>
        <main className="main">{children}</main>
      </div>
      <Footer user={user} />
		</StyledJsxRegistry>
	);
}
export default Layout;
