import { useEffect, useState } from "react";

interface BandList {
  data: Band[];
  vote: (id: string) => void;
  deleteBand: (id: string) => void;
  changeName: (id: string, name: string) => void;
}

const BandList = ({ data, vote, deleteBand, changeName }: BandList) => {
  const [bands, setBands] = useState(data);

  useEffect(() => {
    setBands(data);
  }, [data]);

  const handleOnChange = (id: string, name: string) => {
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
    console.log(id, name);
    changeName(id, name);
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
            onChange={(e) => handleOnChange(band.id, e.target.value)}
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
