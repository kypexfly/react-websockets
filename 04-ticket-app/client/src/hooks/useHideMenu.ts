import { useContext, useEffect } from "react";
import { UiContext } from "../context/UiContext";

export const useHideMenu = (hide: boolean) => {
  const context = useContext(UiContext);

  if (!context) {
    throw new Error("useUiContext must be used within a UiProvider");
  }

  const { hideMenu, showMenu } = context;

  useEffect(() => {
    if (hide) {
      hideMenu();
    } else {
      showMenu();
    }
  }, [hide, hideMenu, showMenu]);

  return context;
};
