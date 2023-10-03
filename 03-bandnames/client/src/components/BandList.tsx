import { useEffect, useState } from "react";
import { useSocketContext } from "../context/SocketContext";

const BandList = () => {
  const [bands, setBands] = useState<Band[]>([]);
  const { socket } = useSocketContext();

  useEffect(() => {
    socket.on("current-bands", (bands: Band[]) => {
      setBands(bands);
    });
    return () => {
      socket.off("current-bands");
    };
  }, [socket]);

  const handleChangeName = (id: string, name: string) => {
    setBands(
      bands.map((band) => {
        if (band.id === id) {
          band.name = name;
        }
        return band;
      })
    );
  };

  const onOffFocus = (id: string, name: string) => {
    socket.emit("change-name", { id, name });
  };

  const vote = (id: string) => {
    socket.emit("vote-band", id);
  };

  const deleteBand = (id: string) => {
    socket.emit("delete-band", id);
  };

  const createRows = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button
            onClick={() => vote(band.id)}
            className="rounded bg-blue-500 text-white px-4 py-2"
          >
            +1
          </button>
        </td>
        <td>
          <input
            type="text"
            name={band.id}
            value={band.name}
            onChange={(e) => handleChangeName(band.id, e.target.value)}
            onBlur={(e) => onOffFocus(band.id, e.target.value)}
            className="w-full border p-2"
          />
        </td>
        <td className="text-lg text-center">{band.votes}</td>
        <td>
          <button
            onClick={() => deleteBand(band.id)}
            className="rounded bg-red-500 text-white px-4 py-2"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Votes</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{createRows()}</tbody>
    </table>
  );
};

export default BandList;
