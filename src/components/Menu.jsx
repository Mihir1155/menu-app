import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, desc, price, category, bestseller, special } = item;

        // Dynamic placeholder image
        const image = `https://placehold.co/600x400/F8F5EF/B22222?text=${encodeURIComponent(
          title,
        )}`;

        return (
          <article key={id} className="menu-item">
            <div className="image-container">
              <img src={image} alt={title} className="photo" />

              {special && (
                <span className="special-badge">🔥 Today's Special</span>
              )}

              {bestseller && <span className="best-badge">⭐ Bestseller</span>}
            </div>

            <div className="item-info">
              <header>
                <h4>{title}</h4>

                <span className="price">₹ {price}</span>
              </header>

              <p className="item-text">{desc}</p>

              <div className="card-footer">
                <span className="category-tag">🍽 {category}</span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
