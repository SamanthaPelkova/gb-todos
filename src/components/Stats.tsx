import Container from "./Container";

interface Item {
  id: number;
  name: string;
  packed: boolean;
}

interface StatsProps {
  items: Item[];
}

export default function Stats({ items }: StatsProps) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some todos 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <Container>
      <footer className="ml-4 font-bold">
        <em>
          {percentage === 100
            ? "You got everything! GOOD WORK!"
            : `You have ${numItems} todos on your list, and you already done ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    </Container>
  );
}
