import "./App.css";

import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Cart from "./Components/Cart";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (meal) => {
    const newCart = [...cart];
    const IsMeal = newCart.find((elem) => elem.id === meal.id);
    if (IsMeal) {
      // incrémenter la quantité
      IsMeal.quantity++;
      setCart(newCart);
    } else {
      meal.quantity = 1;
      newCart.push(meal);
      // Mettre à jour le state cart avec la copie
      setCart(newCart);
      setCartVisible(true);
    }
  };

  const RemoveFromCart = (meal) => {
    const newCart = [...cart];
    const IsMeal = newCart.find((elem) => elem.id === meal.id);
    if (IsMeal.quantity === 1) {
      const index = newCart.indexOf(IsMeal);
      // supprimer l'élément du tableau
      newCart.splice(index, 1);
      if (newCart.length === 0) {
        setCartVisible(false);
      }
    } else {
      IsMeal.quantity--;
    }
    setCart(newCart);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://copy-delivroo-backend.herokuapp.com/"
        );
        /*    console.log(data); */
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.data);
      }
    };

    fetchData();
  }, [data]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div className="wrapper">
      <div>
        <Header restaurant={data.restaurant} />
      </div>
      <div className="content">
        <div>
          <Categories categories={data.categories} addToCart={addToCart} />
        </div>
        <div>
          <Cart
            RemoveFromCart={RemoveFromCart}
            cart={cart}
            setCart={setCart}
            cartVisible={cartVisible}
            setCartVisible={setCartVisible}
            addToCart={addToCart}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
