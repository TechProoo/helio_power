import { createContext, useContext, useState, ReactNode } from "react";

interface NavContextProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const NavContext = createContext<NavContextProps | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [activeLink, setActiveLink] = useState<string>("Home");

  return (
    <NavContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
