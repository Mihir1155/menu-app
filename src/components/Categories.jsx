import React from "react";

const Categories = ({ categories, filterItems, activeCategory }) => {
  const getIcon = (category) => {
    switch (category.toLowerCase()) {
      case "all":
        return "🍽";

      case "today's menu":
        return "🔥";

      case "biriyani":
        return "🍛";

      case "chinese":
        return "🥢";

      case "chicken":
        return "🍗";

      case "beef":
        return "🥩";

      case "breads":
        return "🥖";

      case "juices":
        return "🥤";

      case "eggs":
        return "🥚";

      default:
        return "🍴";
    }
  };

  return (
    <nav className="btn-container" aria-label="Menu Categories">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`filter-btn ${
            activeCategory === category ? "active" : ""
          }`}
          onClick={() => filterItems(category)}
          aria-pressed={activeCategory === category}
          title={category}
        >
          <span className="btn-icon">{getIcon(category)}</span>

          <span>{category}</span>
        </button>
      ))}
    </nav>
  );
};

export default Categories;
