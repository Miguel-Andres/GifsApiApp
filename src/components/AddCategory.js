import React, { useState } from "react";
import PropTypes from "prop-types"



export default function AddCategory({setCategories}) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);

    console.log("handleChange montado")
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("handle submit")
    if(value.trim().length>2){
    setCategories(previus=>[value,...previus ])
    
    setValue("")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{value}</p>
      <input type="text" value={value} onChange={handleChange}  />
    </form>
  );
}

AddCategory.propTypes={
    setCategories : PropTypes.func.isRequired
}