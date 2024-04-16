"use client";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState<Boolean>(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className=" ">
      <button onClick={toggleDarkMode}>{darkMode ? "Light" : "Dark"}</button>
    </div>
  );
}

export default App;
