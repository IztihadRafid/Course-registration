import { useState } from "react";

import "./App.css";
import Courses from "./component/Courses/Courses";
import Bookmarks from "./component/Bookmarks/Bookmarks";

function App() {
  const [bookmarks,setBookmarks] =useState([])
  const handleSelect=(course)=>{
    const newBookmarks = [...bookmarks,course]
    setBookmarks(newBookmarks)
    //console.log(course);
  }
  return (
    <>
      <h1 className="text-3xl text-center p-10">Course Registration</h1>
      <div className="flex ">
        <Courses handleSelect={handleSelect}></Courses>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
