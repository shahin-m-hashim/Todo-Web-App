/* eslint-disable react/prop-types */
import useTodo from "../../hooks/useTodo";
import EditTodoForm from "./EditTodoForm";
import editIcon from "../../assets/icons/edit.svg";
import TodoContext from "../../contexts/TodoProvider";
import deleteIcon from "../../assets/icons/delete.svg";
import cancelIcon from "../../assets/icons/cancel.svg";
import { useContext, useEffect, useRef, useState } from "react";

export default function TodoRow({ id, name, description }) {
  const todoRowRef = useRef();
  const newTodoNameInputRef = useRef();
  const newTodoDescInputRef = useRef();
  const { todoErrorRef } = useContext(TodoContext);

  const [isEditing, setIsEditing] = useState(false);
  const { handleUpdateTodo, handleDeleteTodo } = useTodo();

  useEffect(() => {
    if (isEditing) {
      newTodoNameInputRef.current.value = name;
      newTodoDescInputRef.current.value = description;
    }
  }, [isEditing]);

  return (
    <div
      id={id}
      key={id}
      ref={todoRowRef}
      className="grid grid-cols-[1fr,1fr,50px,50px]"
    >
      {!isEditing ? (
        <>
          <div className="p-2 text-center border-2 border-r-0 border-red-700">
            {name}
          </div>
          <div className="p-2 text-center border-2 border-r-0 border-red-700">
            {description}
          </div>
        </>
      ) : (
        <EditTodoForm
          newTodoNameInputRef={newTodoNameInputRef}
          newTodoDescInputRef={newTodoDescInputRef}
        />
      )}
      <div
        onClick={() => setIsEditing(!isEditing)}
        className={
          isEditing
            ? "hidden"
            : "flex justify-center p-2 bg-blue-500 border-2 border-red-700 cursor-pointer"
        }
      >
        <img src={editIcon} alt="edit-todo" className="size-5" />
      </div>
      <div
        onClick={() => handleDeleteTodo(id)}
        className={
          isEditing
            ? "hidden"
            : "flex justify-center p-2 bg-red-500 border-2 border-red-700 cursor-pointer"
        }
      >
        <img src={deleteIcon} alt="delete-todo" className="size-5" />
      </div>
      <div
        className={
          isEditing
            ? "flex justify-center p-2 bg-green-500 border-2 border-red-700 cursor-pointer"
            : "hidden"
        }
        onClick={() => {
          if (handleUpdateTodo(id, newTodoNameInputRef, newTodoDescInputRef)) {
            setIsEditing(!isEditing);
          }
        }}
      >
        Save
      </div>
      <div
        onClick={() => {
          setIsEditing(!isEditing);
          todoErrorRef.current.classList.add("hidden");
        }}
        className={
          isEditing
            ? "flex justify-center p-2 bg-red-500 border-2 border-red-700 cursor-pointer"
            : "hidden"
        }
      >
        <img src={cancelIcon} alt="cancel-todo" className="size-5" />
      </div>
    </div>
  );
}
