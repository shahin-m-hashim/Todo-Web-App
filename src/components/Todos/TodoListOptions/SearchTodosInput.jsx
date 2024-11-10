import { useState } from "react";

export default function SearchTodosInput() {
  const [search, setSearch] = useState("");

  return (
    <input
      type="text"
      value={search}
      placeholder="Search Todos"
      className="p-1 mb-1 border-2 rounded-md"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
