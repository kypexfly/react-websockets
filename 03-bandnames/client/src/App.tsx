import { useEffect, useState } from "react";
import BandAdd from "./components/BandAdd";
import BandList from "./components/BandList";
import { useSocket } from "./hooks/useSocket";

function App() {
  const { socket, online } = useSocket("http://localhost:8080");
  const [bands, setBands] = useState<Band[]>([]);

  useEffect(() => {
    socket.on("current-bands", (bands: Band[]) => {
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
