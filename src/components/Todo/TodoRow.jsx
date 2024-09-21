/* eslint-disable react/prop-types */
import useTodo from "../../hooks/useTodo";
import EditTodoForm from "./EditTodoForm";
import editIcon from "../../assets/icons/edit.svg";
import { useEffect, useRef, useState } from "react";
import deleteIcon from "../../assets/icons/delete.svg";
import cancelIcon from "../../assets/icons/cancel.svg";

export default function TodoRow({ id, name, description }) {
  const todoRowRef = useRef();
  const newTodoNameRef = useRef();
  const newTodoDescRef = useRef();

  const [isEditing, setIsEditing] = useState(false);
  const { handleUpdateTodo, handleDeleteTodo } = useTodo();

  useEffect(() => {
    if (isEditing) {
      todoRowRef.current.children[2].style.display = "none";
      todoRowRef.current.children[3].style.display = "none";
      todoRowRef.current.children[4].style.display = "flex";
      todoRowRef.current.children[5].style.display = "flex";
    } else {
      todoRowRef.current.children[2].style.display = "flex";
      todoRowRef.current.children[3].style.display = "flex";
      todoRowRef.current.children[4].style.display = "none";
      todoRowRef.current.children[5].style.display = "none";
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
        EditTodoForm({ newTodoNameRef, newTodoDescRef })
      )}
      <div
        onClick={() => setIsEditing(!isEditing)}
        className="justify-center p-2 bg-red-500 border-2 border-r-0 border-red-700 cursor-pointer"
      >
        <img src={editIcon} alt="edit-todo" className="size-5" />
      </div>
      <div
        onClick={() => handleDeleteTodo(id)}
        className="justify-center p-2 bg-red-500 border-2 border-red-700 cursor-pointer"
      >
        <img src={deleteIcon} alt="delete-todo" className="size-5" />
      </div>
      <div
        onClick={() => {
          if (handleUpdateTodo(id, newTodoNameRef, newTodoDescRef)) {
            setIsEditing(!isEditing);
          }
        }}
        className="justify-center p-2 bg-green-500 border-2 border-red-700 cursor-pointer"
      >
        Save
      </div>
      <div
        onClick={() => setIsEditing(!isEditing)}
        className="justify-center p-2 bg-red-500 border-2 border-red-700 cursor-pointer"
      >
        <img src={cancelIcon} alt="cancel-todo" className="size-5" />
      </div>
    </div>
  );
}
