/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const User = ({user }) => {
    const{id,name,email,phone}=user;
    
    return (
        <div className="  2px border border-red-500 p-10 rounded-md m-5" >
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>phone:{phone}</p>
            <Link to={`/user/${id}`} className="btn btn-primary m-2">Show Details</Link>
            
        </div>
    );
};

export default User;