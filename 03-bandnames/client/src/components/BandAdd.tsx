import { useState } from "react";

interface BandAddProps {
  createBand: (name: string) => void;
}

const BandAdd = ({ createBand }: BandAddProps) => {
  const [input, setInput] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim().length > 0) {
      createBand(input);
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
