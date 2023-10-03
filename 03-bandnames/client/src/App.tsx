import { useEffect, useState } from "react";
import BandAdd from "./components/BandAdd";
import BandList from "./components/BandList";
import { io } from "socket.io-client";

const connectSocketServer = () => {
  const socket = io("http://localhost:8080", {
    transports: ["websocket"],
  });
  return socket;
};

function App() {
  const [socket] = useState(() => connectSocketServer());
  const [online, setOnline] = useState(false);
  const [bands, setBands] = useState([]);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBands(bands);
    });
  }, [socket]);

  const vote = (id: string) => {
    socket.emit("vote-band", id);
  };

  const deleteBand = (id: string) => {
    socket.emit("delete-band", id);
  };

  const changeName = (id: string, name: string) => {
    socket.emit("change-name", { id, name });
  };

  const createBand = (name: string) => {
    socket.emit("create-band", { name });
  };

  return (
    <div className="container mx-auto">
      <div className="alert">
        <p>
          Service status:
          {online ? (
            <span className="text-green-400"> Online</span>
          ) : (
            <span className="text-red-400"> Offline</span>
          )}
        </p>
      </div>

      <h1 className="text-xl my-3">Band Names</h1>
      <hr />

      <div className="grid grid-cols-12 py-3">
        <div className="col-span-8">
          <BandList data={bands} vote={vote} deleteBand={deleteBand} changeName={changeName} />
        </div>
        <div className="col-span-4">
          <BandAdd createBand={createBand} />
        </div>
      </div>
    </div>
  );
}

export default App;
