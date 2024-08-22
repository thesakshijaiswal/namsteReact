import { IMGUrl } from "../utils/constants";
const RestaurantCard = ({ name, cloudinaryImageId, avgRating, sla, cuisines, locality,}) => {
  return (
    <div className="m-4 w-72 overflow-hidden rounded-xl h-96">
        <div className="flex flex-col rounded-xl">
          <div className="h-56 w-full rounded-xl overflow-hidden">
            <img src={IMGUrl + cloudinaryImageId} alt={name} className="w-full h-full object-cover object-center" />
          </div>
          <div className="p-2">
            <h2 className="truncate text-lg font-semibold mt-3 text-[#3C2F2F]">{name}</h2>
            <div className="flex items-center">
            <h4 className=""><i className="ri-star-fill mr-2 text-[#FF9633]"></i>{avgRating}</h4>
            <h4 className="pl-3 flex items-center">
            <i class="ri-circle-fill text-[#1CC019] text-xs pr-1"></i>{sla?.deliveryTime} mins</h4>
            </div>
            <p className="mt-1 truncate">{cuisines?.join(", ")}</p>
            <h4 className="mt-1"><i class="ri-map-pin-fill text-[#EF2A39] pr-1"></i>{locality}</h4>
          </div>
        </div>
    </div>
  );
};
export default RestaurantCard;