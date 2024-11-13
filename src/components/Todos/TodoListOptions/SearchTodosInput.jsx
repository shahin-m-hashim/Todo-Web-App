import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function SearchTodosInput() {
  const { options, handleSearch } = useContext(TodoContext);

  return (
    <input
      type="text"
      id="searchTodos"
      onChange={handleSearch}
      placeholder="Search Todos"
      value={options.searchQuery}
      className="p-2 mb-4 border-2 rounded-md"
    />
  );
}
