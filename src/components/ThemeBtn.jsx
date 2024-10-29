/* eslint-disable react/prop-types */

import { useContext } from "react";
import UserInterfaceContext from "../providers/UserInterfaceProvider";

export default function ThemeBtn({ theme, backgroundColor }) {
  const { setTheme } = useContext(UserInterfaceContext);

  return (
    <button
      type="button"
      style={{ backgroundColor }}
      onClick={() => setTheme(theme)}
      className="p-3 border-2 rounded-full"
    ></button>
  );
}
