import { useContext } from "react";
import { UiContext } from "../context/UiContext";

export const useUiContext = () => {
  const context = useContext(UiContext);

  if (!context) {
    throw new Error("useUiContext must be used within a UiProvider");
  }

  return context;
};
