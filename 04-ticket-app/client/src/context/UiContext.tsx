import { createContext, useState } from "react";

interface UiContextInterface {
  isOpen: boolean;
  showMenu: () => void;
  hideMenu: () => void;
}

export const UiContext = createContext({} as UiContextInterface);

export const UiProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen(true);
  };
  const hideMenu = () => {
    setIsOpen(false);
  };

  return (
    <UiContext.Provider
      value={{
        isOpen,
        showMenu,
        hideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
