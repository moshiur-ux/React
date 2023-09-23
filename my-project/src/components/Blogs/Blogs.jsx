import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleToAddBookmark ,handleMarksAsRead}) => {
    const[blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))

    },[])
    
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl"> Blogs Elements:{blogs.length}</h1>
            {
                blogs.map(blog=><Blog 
                    key={blog.id} 
                    blog={blog}
                    handleToAddBookmark={handleToAddBookmark}
                    handleMarksAsRead={handleMarksAsRead}
                    
                    ></Blog>)

            }


            
        </div>
    );
};

Blogs.PropTypes=
{
    handleToAddBookmark:PropTypes.func

}

export default Blogs;