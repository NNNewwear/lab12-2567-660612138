import { LangContext } from "@contexts/LangContext";
import { ThemeContext } from "@contexts/ThemeContext";
import { useContext } from "react";

export default function Controller() {
  const { toggleTheme, setDarkTheme, setLightTheme } = useContext(ThemeContext);
  const { toggleLang, lang } = useContext(LangContext);
  return (
    <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-secondary" onClick={setLightTheme}>
        {/* Please update this text so it shows in EN or TH */}
        {lang.buttons.setLightTheme}
      </button>
      <button className="btn btn-dark" onClick={setDarkTheme}>
        {/* Please update this text so it shows in EN or TH */}
        {lang.buttons.setDarkTheme}
      </button>
      <button className="btn btn-primary" onClick={toggleTheme}>
        {/* Please update this text so it shows in EN or TH */}
        {lang.buttons.toggleTheme}
      </button>
      <button className="btn btn-danger" onClick={toggleLang}>
        {/* Please update this text so it shows in EN or TH */}
        {lang.buttons.toggleLang}
      </button>
    </div>
  );
}
