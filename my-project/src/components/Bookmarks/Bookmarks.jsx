
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3'>
            <div className='text-4xl'>Reading time:{readingTime}</div>
            <h2 className='text-3xl'>Bookmark:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks:PropTypes.array

    
};

export default Bookmarks; 