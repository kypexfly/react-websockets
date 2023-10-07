import React, { createContext } from "react";
import { useSocket } from "../hooks/useSocket";
import { Socket } from "socket.io-client";

export const SocketContext = createContext<{
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


