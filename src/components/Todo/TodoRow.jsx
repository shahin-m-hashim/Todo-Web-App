/* eslint-disable react/prop-types */

import { useState } from "react";
import EditTodoBtn from "./EditTodoBtn";
import EditTodoForm from "./EditTodoForm";
import DeleteTodoBtn from "./DeleteTodoBtn";

export default function TodoRow({ id, name, description }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div id={id} key={id} className="grid grid-cols-[1fr,1fr,50px,50px]">
      {!isEditing ? (
        <>
          <div className="p-2 text-center border-2 border-r-0 border-red-700">
            {name}
          </div>

          <div className="p-2 text-center border-2 border-r-0 border-red-700">
            {description}
          </div>

          <EditTodoBtn setIsEditing={setIsEditing} />
          <DeleteTodoBtn id={id} />
        </>
      ) : (
        <EditTodoForm
          id={id}
          name={name}
          isEditing={isEditing}
          description={description}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}
