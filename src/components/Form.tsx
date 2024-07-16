import React, { useState } from "react";
import Container from "./Container";

interface FormProps {
  onAddItems: (item: {
    description: string;
    quantity: number;
    packed: boolean;
    id: number;
  }) => void;
}

export default function Form({ onAddItems }: FormProps) {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <Container>
        <h3 className="underline text-xl">
          List to buy on GYM<strong>BEAM :</strong>
        </h3>
        <div className="bg-gray-300 lg:w-1/2 lg:rounded-full rounded-3xl mt-2">
          <select
            className="bg-gray-100 lg:p-3 p-2 rounded-xl lg:mx-6 mx-4 my-4 text-black"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            className="lg:p-3 p-2 rounded-xl w-1/2 text-black"
            type="text"
            placeholder="Protein.."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black lg:p-3 p-2 text-white font-bold text-xs lg:ml-16 ml-2 lg:w-auto w-1/7 rounded-xl"
          >
            ADD ITEM
          </button>
        </div>
      </Container>
    </form>
  );
}
