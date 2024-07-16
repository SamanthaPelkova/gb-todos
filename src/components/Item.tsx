interface ItemProps {
  item: {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
  };
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

export default function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
  return (
    <li>
      <input
        className="lg:mr-10 mr-4"
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span
        style={item.packed ? { textDecoration: "line-through" } : {}}
        className="lg:mr-6 lg:p-2"
      >
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => onDeleteItem(item.id)}
        className="bg-red-500 p-2 text-sm mb-5 rounded-xl text-white font-bold ml-28"
      >
        DELETE
      </button>
    </li>
  );
}
