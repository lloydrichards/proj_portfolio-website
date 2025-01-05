import { FC, ReactNode } from "react";

const AboutLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="col-span-full">{children}</div>;
};

export default AboutLayout;
