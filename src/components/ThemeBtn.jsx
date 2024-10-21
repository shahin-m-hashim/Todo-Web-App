/* eslint-disable react/prop-types */

export default function ThemeBtn({ setTheme, theme, color }) {
  return (
    <button
      onClick={() => setTheme(theme)}
      style={{ backgroundColor: color }}
      className="p-3 bg-white rounded-full"
    ></button>
  );
}
