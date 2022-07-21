import Navbar from "@/components/navbar";

interface LayoutProps {
    children: React.ReactNode;
}
 const Layout= ({ children }:LayoutProps) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
export default Layout;