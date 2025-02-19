import Navbar from "./Navbar";
import Hero from "./Hero";

type TopProps = {
  background: string;
  head: string,
  bge: string,
  bgColor: string,
  color: string
};
const Top: React.FC<TopProps> = ({background, head, bge, bgColor, color}) => {
  return (
    <div
      className="top p-5"
      style={{ backgroundImage: `url('${background}')`, backgroundColor:`${bgColor}` }}
    >
      <Navbar color={color} />
      <Hero head={head} bge={bge} color={color} />
    </div>
  );
};

export default Top;
