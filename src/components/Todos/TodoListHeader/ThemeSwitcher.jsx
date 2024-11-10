import ThemeBtn from "../../ThemeBtn";

export default function ThemeSwitcher() {
  return (
    <div className="flex items-center gap-3">
      <span className="hidden md:inline">Switch Themes ?</span>
      <ThemeBtn theme="light" backgroundColor="hsl(32, 67%, 82%)" />
      <ThemeBtn theme="dark" backgroundColor="hsl(207, 26%, 17%)" />
    </div>
  );
}
