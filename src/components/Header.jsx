import React, { useEffect, useState } from "react";

function Header({ toggleDarkMode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <header className={visible ? "visible" : ""}>
      <h1>Keeper</h1>
      <button onClick={toggleDarkMode}> Dark</button>
    </header>
  );
}

export default Header;
