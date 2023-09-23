import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleToAddBookmark,handleMarksAsRead}) => {
    const {id,title ,author,author_img,reading_time,posted_date,cover,hashtags}=blog

    return (
        <div className='mb-10 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex ' >
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min red</span>
                    <button onClick={()=>handleToAddBookmark (blog)} className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>


                </div>

            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                     hashtags.map((hash,idx)=> <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarksAsRead(id,reading_time)} >Mark As Read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleToAddBookmark:PropTypes.func
}


export default Blog;