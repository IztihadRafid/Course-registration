import { useState } from "react";

import "./App.css";
import Courses from "./component/Courses/Courses";
import Bookmarks from "./component/Bookmarks/Bookmarks";

function App() {
  const [bookmarks,setBookmarks] =useState([])
  
  const handleSelect=(course)=>{
    const newBookmarks = [...bookmarks,course]
    setBookmarks(newBookmarks)

  }

  //credit hourse
  const [creditHours,setCreditHours] = useState(0)

  const handleCreditHour=(credit_hour)=>{
    const newCreditHours = credit_hour + creditHours
    setCreditHours(newCreditHours)
 
  
  }
  

  return (
    <>
      <h1 className="text-3xl text-center p-10">Course Registration</h1>
      <div className="flex ">
        <Courses handleSelect={handleSelect} handleCreditHour={handleCreditHour} ></Courses>
        <Bookmarks bookmarks={bookmarks}creditHours={creditHours}></Bookmarks>
      </div>
    </>
  );
}

export default App;
