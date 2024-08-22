import "./shimmer.css";
const ShimmerCard = () => {
  return (
    <div>
      <div className="card w-72 space-y-5">
        <div className="cardImg w-full h-56 rounded-lg"></div>
        <div className="ml-3 space-y-3 pb-8">
          <h2 className="w-[90%] h-7 bg-gray-300 rounded-md"></h2>
          <p className="w-3/4 h-7 bg-gray-300 rounded-md"></p>
          <h4 className="w-1/4 h-7 bg-gray-300 rounded-md"></h4>
        </div>
      </div>
    </div>
  );
};
export default ShimmerCard;
