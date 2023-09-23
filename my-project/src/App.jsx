

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {
const [bookmarks,setBookmarks]=useState([])
const [readingTime,setReadingTime]=useState(0)

const handleToAddBookmark=blog=>
{
  const newbookmarks=[...bookmarks,blog]
  setBookmarks(newbookmarks)

}

const handleMarksAsRead=(id,time) =>
{
  const newreadingTime=readingTime+time;
  setReadingTime(newreadingTime)
  // console.log('remove bookmark from here',id)
   const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id !=id)
   setBookmarks(remainingBookmarks);
   
   
}
  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-6xl mx-auto'>
    <Blogs handleMarksAsRead={handleMarksAsRead} handleToAddBookmark={handleToAddBookmark}></Blogs> 
    <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
    </div>
    
     

    </>
  )
}

export default App
