import BandAdd from "./components/BandAdd";
import BandCharts from "./components/BandCharts";
import BandList from "./components/BandList";
import { useSocketContext } from "./context/SocketContext";

function App() {
  const { online } = useSocketContext();

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

      <div>
        <BandCharts />
      </div>

      <div className="grid grid-cols-12 py-3">
        <div className="col-span-8">
          <BandList />
        </div>
        <div className="col-span-4">
          <BandAdd />
        </div>
      </div>
    </div>
  );
}

export default App;
