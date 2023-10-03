import { useState } from "react";
import { useSocketContext } from "../context/SocketContext";

const BandAdd = () => {
  const [input, setInput] = useState("");
  const { socket } = useSocketContext();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim().length > 0) {
      socket.emit("create-band", { name: input });
      setInput("");
    }
  };

  return (
    <>
      <h3>Add band</h3>

      <form onSubmit={onSubmit}>
        <input
          className="border p-2"
          placeholder="New band name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </>
  );
};

export default BandAdd;
