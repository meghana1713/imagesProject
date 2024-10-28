import React from 'react';
import { useGlobalContext } from './Context';
const SearchForm = () =>{
  const {setSearchTerm} = useGlobalContext();
const handleSubmit = (event)=>{
 event.preventDefault();
  const searchValue=event.target.elements.search.value; 
  // In your code, e.target refers to the <form> element because handleSubmit is attached to the onSubmit event of the form, not directly to the input. To access the value of the input field, you need to target the specific input element inside the form
  if(!searchValue){// if there is no value in searchValue
    return;// it returns nothing 
  }
  setSearchTerm(searchValue);
}


  return (
  <section>
<h1 className = "title">Images</h1>
<form className="search-form" onSubmit={handleSubmit}>
    <input type = "text"
    className = "form-input search-input " name="search" placeholder="search of images"></input>
    <button type="submit" className ="btn">Submit</button>  
</form>
  </section>
  
  );
};

export default SearchForm;
