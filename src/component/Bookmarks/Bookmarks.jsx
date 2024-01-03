import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,creditHours,priceCourse}) => {
    const remainingcredit = 20 - creditHours
    if(creditHours>20){
        alert("You can't take more than 20 credit")
    }


    return (
        <div className='w-1/3 bg-gray-100 p-5 rounded-lg m-5'>
            <h1>Courses: {bookmarks.length}</h1>
            <h2 className='text-xl font-semibold text-blue-700'>Credit Remaining: {remainingcredit}hr</h2>
            
            <h1 className='text-2xl font-bold'>Course Name</h1>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            <div className='p-5'>
                <h2 className='text-xl font-semibold'>Total Credit Hour: {creditHours}hr</h2>
                <h2 className='text-xl font-semibold'>Total Price: {priceCourse}</h2>
            </div>
        </div>
    );
};

export default Bookmarks;