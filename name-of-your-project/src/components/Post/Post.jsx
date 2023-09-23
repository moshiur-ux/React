/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const naviagte =useNavigate();
    const{id,title}=post
    const handleShowDetails=() =>
    {
        naviagte(`/post/${id}`)

    }
    return (
        <div className="border border-solid m-3 bg-yellow-50">
            <h4 className="m-3">Post of Id:{id}</h4>
            <p className="m-2">{title}</p>
            <Link to={`/post/${id}` } className="btn">Post Details</Link>
            <button className="btn-error p-4 rounded " onClick={handleShowDetails}> Click to see Details</button>
            
        </div>
    );
};

export default Post;