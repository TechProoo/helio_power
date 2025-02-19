import Image from "../Image/pref.webp";
const CardFour = () => {
  return (
    <div className="card_four">
      <div className="card_four_head">
        <h1 className="ft_hd">Skilled technicians delivering top-notch service.</h1>
      </div>
      <div className="card_four_body mt-3">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default CardFour;
