import Cards from "../Cards/Cards";
import Table from "../Table/Table";

import "./MainDash.css"
const MainDash: React.FC = () => {
    return (
        <div className="MainDash">
            <h1>Dashboard</h1>
            <Cards />
            <Table />
        </div>
    );
};

export default MainDash;