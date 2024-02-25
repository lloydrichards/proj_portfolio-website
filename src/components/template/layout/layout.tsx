import { FC } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
