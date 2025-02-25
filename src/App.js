import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Helper from "./components/helper/helper";
import "./components/i18n"; // Import i18n configuration
import LoadingScreen from "./components/loading/loadingScreen"; // Import your loading component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 500); // Smooth transition
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <React.StrictMode>
      {isLoading ? <LoadingScreen /> : (
        <>
          <Navbar />
          <Helper />
        </>
      )}
    </React.StrictMode>
  );
}

export default App;
