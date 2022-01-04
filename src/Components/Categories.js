import Meals from "./Meals";

const Categories = ({ categories, addToCart }) => {
  return (
    <div>
      {categories.map((cat, index) => {
        return (
          <div key={index} className="section">
            <h2>{cat.name}</h2>
            <div className="section-block">
              <Meals meal={cat.meals} index={index} addToCart={addToCart} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
