import React, { useState } from "react";
import PropTypes from "prop-types"



export default function AddCategory({setCategories}) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setCategories(previus=>[value,...previus ])
    setValue("")
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange}required />
    </form>
  );
}

AddCategory.propTypes={
    setCategories : PropTypes.func.isRequired
}