import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post =useLoaderData();
    const naviagte=useNavigate();
    const {postId} =useParams();
   

    const handleGoBack=()=>
    {
        naviagte(-1)
    }
    const{ id,title,body}=post;
    console.log(postId);
    return (
        <div className="border box-border bg-red-100 m-5 p-5">
            <h3 className="text-4xl text-blue-600">Post Details About:{id}</h3>
            <p className="text-2xl">Title:{title}</p>
            <p className="text-2xl"><small>{body}</small></p>
            <button className="btn btn-success" onClick={handleGoBack}> Go back</button>
            
        </div>
    );
};

export default PostDetails;