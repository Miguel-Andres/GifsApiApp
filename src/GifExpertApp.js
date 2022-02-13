import React,{useState} from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


export default function GifExpertApp() {
    const [categories, setCategories] = useState([ "jordan"])
  // const categories = ;


 

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory setCategories={setCategories} />

      <hr />
    
    

      <ol>
        {categories.map((item,i) => (
          <GifGrid key={item} category={item} />
        ))}
      </ol>
    </>
  );
}
