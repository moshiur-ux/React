import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts=useLoaderData()
    return (
        <div >
            <h2>Posts:{posts.length}</h2>
            <div className="grid grid-cols-3 border border-solid">
            {
                posts.map(post=><Post  key={post.id} post={post}></Post>)
            }
            </div>
            
        </div>
    );
};

export default Posts;