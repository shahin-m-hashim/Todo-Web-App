/* eslint-disable react/prop-types */

export default function ThemeBtn({ setTheme, theme, backgroundColor }) {
  return (
    <button
      onClick={() => setTheme(theme)}
      style={{ backgroundColor }}
      className="p-3 border-2 rounded-full"
    ></button>
  );
}
