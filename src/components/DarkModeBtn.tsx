"use client";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState<Boolean>(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  // Apply theme when darkMode changes
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#0f172a";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#efdcf9";
    }
  }, [darkMode]);

  return (
    <div className=" bg-purple-950 px-5 py-3">
      <button onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;
