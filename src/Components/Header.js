const Header = ({ restaurant }) => {
  return (
    <div className="content">
      <div className="bloc1">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
      </div>
      <div className="bloc2">
        <img src={restaurant.picture} alt="repas proposé"></img>
      </div>
    </div>
  );
};

export default Header;
