const RestaurantCard = ({ image, name, cuisines, rating }) => {
  return (
    <div className="foodCard">
      <img src={image} alt="American Burger" />
      <h2>{name}</h2>
      <p>{cuisines?.join(", ")}</p>
      <h4>
        Ratings: {rating}
        <i className="ri-star-fill"></i>
      </h4>
    </div>
  );
};
export default RestaurantCard;
