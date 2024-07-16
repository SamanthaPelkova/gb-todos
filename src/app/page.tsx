"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Form from "@/components/Form";
import PackingList from "@/components/PackingList";
import Stats from "@/components/Stats";
import Container from "@/components/Container";
import ThemeSwitch from "@/components/ThemeSwitch";

interface Item {
  id: number;
  name: string;
  description: string;
  quantity: number;
  packed: boolean;
}

const apiUrl = "https://669533594bd61d8314ca770f.mockapi.io/gymbeam/todos";

export default function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get(apiUrl);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }

    fetchItems();
  }, []);

  async function handleAddItems(item: Item) {
    try {
      const response = await axios.post(apiUrl, item);
      setItems((prevItems) => [...prevItems, response.data]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }

  async function handleDeleteItem(id: number) {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  async function handleToggleItem(id: number) {
    const itemToToggle = items.find((item) => item.id === id);
    if (itemToToggle) {
      try {
        const response = await axios.put(`${apiUrl}/${id}`, {
          ...itemToToggle,
          packed: !itemToToggle.packed,
        });
        setItems((prevItems) =>
          prevItems.map((item) => (item.id === id ? response.data : item))
        );
      } catch (error) {
        console.error("Error toggling item:", error);
      }
    }
  }

  async function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) {
      try {
        await Promise.all(
          items.map((item) => axios.delete(`${apiUrl}/${item.id}`))
        );
        setItems([]);
      } catch (error) {
        console.error("Error clearing list:", error);
      }
    }
  }

  return (
    <main className="">
      <div className="relative inset-0"></div>
      <Container>
        <div>
          <h1 className="text-4xl text-center p-10">
            G Y M <strong> B E A M</strong>
          </h1>
          <ThemeSwitch />
        </div>
      </Container>

      <div className="app">
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </main>
  );
}
