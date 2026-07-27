import React, { useState } from "react";
import "./App.css";

import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "./components/Data";
import logo from "./logo2.jpeg";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterItems = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setMenuItems(items);
      return;
    }

    const filteredItems = items.filter((item) => item.category === category);

    setMenuItems(filteredItems);
  };

  return (
    <main className="app">
      <section className="menu section">
        {/* Hero */}

        <div className="title">
          <img src={logo} alt="Parudeesa Kitchen" className="logo" />

          <h2>Parudeesa Kitchen</h2>

          <p className="hero-text">Authentic Kerala • Chinese • Fresh Juices</p>

          <div className="underline"></div>
        </div>

        {/* Categories */}

        <Categories
          categories={allCategories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />

        {/* Menu */}

        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
