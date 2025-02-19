import Info from "./Info";
import Portfoli from "./Portfoli";
import Services from "./Services";

const Middle = () => {
  return (
    <div>
      <Info />
      <div className="middle_cover">
        <Services />
        <Portfoli />
      </div>
    </div>
  );
};

export default Middle;
