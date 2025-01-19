import { FC, ReactNode } from "react";

const AboutLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <main className="col-span-full">{children}</main>;
};

export default AboutLayout;
