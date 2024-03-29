import { IMGUrl } from "../constants";
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="foodCard">
      <img src={IMGUrl + cloudinaryImageId} alt={name} />
      <h2>{name}</h2>
      <p>{cuisines?.join(", ")}</p>
      <h4>
        Ratings: {avgRating}
        <i className="ri-star-fill"></i>
      </h4>
    </div>
  );
};
export default RestaurantCard;
