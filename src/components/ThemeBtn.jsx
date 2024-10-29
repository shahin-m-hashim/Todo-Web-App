/* eslint-disable react/prop-types */

export default function ThemeBtn({ setTheme, theme, backgroundColor }) {
  return (
    <button
      type="button"
      style={{ backgroundColor }}
      onClick={() => setTheme(theme)}
      className="p-3 border-2 rounded-full"
    ></button>
  );
}
