import React, { createContext } from "react";
import { useSocket } from "../hooks/useSocket";
import { Socket } from "socket.io-client";

const SocketContext = createContext<{
  socket: Socket;
  online: boolean;
}>({
  socket: {} as Socket,
  online: false,
});

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const { socket, online } = useSocket("http://localhost:8080");
  return (
    <SocketContext.Provider
      value={{
        socket,
        online,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => {
  const context = React.useContext(SocketContext);

  if (!context) {
    throw new Error("useSocketContext must be used within a SocketProvider");
  }

  return context;
};
