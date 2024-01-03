import { useEffect, useState } from "react";
import Course from "../Course/Course";


const Courses = ({handleSelect,handleCreditHour}) => {
const [courses,setCourses] =useState([])
    
useEffect(()=>{
    fetch('course_list.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
},[])
    return (
        <div>
            <h1>Course: {courses.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-lg">
            {
                courses.map((course,idx)=><Course key={idx} handleSelect={handleSelect} handleCreditHour={handleCreditHour} course={course}></Course>)
            }
            </div>
        </div>
    );
};

export default Courses;