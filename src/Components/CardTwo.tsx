import { FaUser } from "react-icons/fa"; // Import the React Icon

interface CardTwoProps {
  service: string;
}

const CardTwo = ({ service }: CardTwoProps) => {
  return (
    <div className="card_two_cover relative">
      <div className="card_two_border absolute"></div>
      <div className="flex justify-between gap-3 w-12/12">
        <div className="card_two_icon_cover">
          <FaUser size="27" className="card_two_icon" /> {/* Updated Icon */}
        </div>
        <div className="card_two_body">
          <h1 className="ft_hd">{service}</h1>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
