import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function SearchTodosInput() {
  const { searchQuery, handleSearch } = useContext(TodoContext);

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearch}
      placeholder="Search Todos"
      className="p-1 mb-1 border-2 rounded-md"
    />
  );
}
