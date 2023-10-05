import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <h2>Moshiur</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;