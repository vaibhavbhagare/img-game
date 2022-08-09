import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div>
      <h2>html is here for home/ all state comes with props</h2>
      <div>
        <Link to="/dashboard">Go to Dashboard</Link>
      </div>
    </div>
  );
};

export default HomeView;
