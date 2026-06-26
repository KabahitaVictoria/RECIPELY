import React, { useState, useEffect } from "react";
import './Navigation.css';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const menuItems = ["Features", "Recipes", "About"];

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 768) {
        setOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return (
    <header>
      <div>
        <div>
          <img className="icon" src="/fork-and-knife.png" alt="" />
        </div>
        <div>Recipely</div>
      </div>

      <nav>
        {menuItems.map(item => (
          <a key={item} href={`#${item}`}>
            {item}
          </a>
        ))}
      </nav>

      <button>Get Started</button>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        <img src="/hamburger.png" alt="" />
      </button>

      {open && (
        <div className="mobile-menu">
          <nav id="mobile-nav">
            {menuItems.map(item => (
              <a 
                key={item} 
                href={`#${item}`}
                onClick={() => setOpen(false)}
                >
                {item}
              </a>
            ))}
          </nav>

          <button 
            className="get-started"
            onClick={() => setOpen(false)}
          >
            Get Started</button>
        </div>
      )}
    </header>
  )
}

export default Navigation;