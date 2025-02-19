import Upper from "../Components/Upper";
import Middle from "../Components/Middle";
import Bottom from "../Components/Bottom";
import Link_what from "../Components/Link_what"

const Dashboard = () => {
  return (
    <div>
      <div className="p-4">
        <Link_what />
        <Upper />
        <Middle />
        <Bottom />
      </div>
    </div>
  );
};

export default Dashboard;
