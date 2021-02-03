import React,{ useState } from 'react'
import "./searchbar.css";


const SearchBar = (props) =>{
    const [searchValue, setSearchValue] = useState("");
    const handleTextChange = (event) =>{
       setSearchValue(event.target.value)
    }
    const handleClick = () => {
      setSearchValue("");
    }

    const fileritems = props.prod.filter((item) => {
      return item.includes(searchValue);
    });
    const textlength = searchValue.length > 0

    return (
      <div>
        <input value={searchValue} onChange={handleTextChange} />
        {textlength && <button onClick={handleClick}>Clear</button>}
        {fileritems.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </div>
    );
}

export default SearchBar