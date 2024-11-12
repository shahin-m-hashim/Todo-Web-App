import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function SearchTodosInput() {
  const { options, handleSearch } = useContext(TodoContext);

  return (
    <input
      type="text"
      onChange={handleSearch}
      placeholder="Search Todos"
      value={options.searchQuery}
      className="p-1 mb-1 border-2 rounded-md"
    />
  );
}
