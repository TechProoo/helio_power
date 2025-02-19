import Image from "../Image/sert.webp";
const Card_five = () => {
  return (
    <div className="card_five">
      <div className="card_five_img">
        <img src={Image} className="img-fluid" alt="" />
      </div>
      <div className="card_five_body">
        <h1 className="mt-2 ft_hd">Customer Satisfaction, Reliability <br /> and Affordability</h1>
        <p className="mt-2">
           We prioritize your comfort, convenience and quality service at
          competitive prices
        </p>
      </div>
    </div>
  );
};

export default Card_five;
