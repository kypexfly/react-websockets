import { createContext, useContext, useState } from "react";

interface UiContextInterface {
  isOpen: boolean;
  showMenu: () => void;
  hideMenu: () => void;
}

const UiContext = createContext({} as UiContextInterface);

export const UiProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen(false);
  };
  const hideMenu = () => {
    setIsOpen(true);
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

export const useUiContext = () => {
  const context = useContext(UiContext);

  if (!context) {
    throw new Error("useUiContext must be used within a UiProvider");
  }

  return context;
};
