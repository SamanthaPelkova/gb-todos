import Container from "./Container";
import Item from "./Item";

interface Item {
  id: number;
  name: string;
  description: string;
  quantity: number;
  packed: boolean;
}

interface PackingListProps {
  items: Item[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearList: () => void;
}

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}: PackingListProps) {
  return (
    <Container>
      <div className="lg:ml-16 ml-4 lg:mt-10 mt-4">
        <ul className="text-xl lg:pl-2">
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>

        <div className="lg:-ml-14">
          <button
            onClick={onClearList}
            className="bg-red-500 p-2 text-sm mb-5 rounded-xl text-white font-bold"
          >
            Clear list
          </button>
        </div>
      </div>
    </Container>
  );
}
