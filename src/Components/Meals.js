import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meals = ({ meal, index, addToCart }) => {
  return (
    <>
      {meal.map((meal) => {
        return (
          <div
            key={meal.id}
            className="meal-box"
            onClick={() => {
              addToCart(meal);
            }}
          >
            <div className="item">
              <h3>{meal.title}</h3>
              <p className="sectionDescription">{meal.description}</p>

              <p>
                <span className="price">{meal.price} €</span>
                {meal.popular === true && (
                  <span className={"popular"}>
                    <FontAwesomeIcon icon="star"></FontAwesomeIcon>
                    populaire
                  </span>
                )}
              </p>
            </div>
            <div>
              {meal.picture && (
                <div>
                  <img src={meal.picture} alt={meal.title}></img>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Meals;
