import { IoIosBookmarks } from "react-icons/io";
const Course = ({course,handleSelect, handleCreditHour}) => {
    const {title, description, image, credit_hour, price} =course
    return (
        <div className="bg-white border-2  border-solid rounded-xl">
            <img className="w-full mx-auto p-5" src={image} alt="course-images" />
            <h3 className="text-xl font-medium p-4">{title}</h3>
            <p className=" p-4">{description}</p>
            <div className="flex justify-evenly items-center">
            <p className="mr-10">Price: {price}</p>
            <button onClick={()=>handleCreditHour(credit_hour)}
             className="text-blue-600 ml-10 hover:text-red-500 "><IoIosBookmarks /></button>
            <p>Credit hour: {credit_hour}</p>
            </div>
            <button className=" w-full hover:bg-blue-900 mt-4 font-semibold bg-blue-700 text-xl text-white px-20 py-2 rounded-lg" onClick={()=>handleSelect(course)}>SELECT</button>
        </div>
    );
};

export default Course;