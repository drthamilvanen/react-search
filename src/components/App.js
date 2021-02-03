import React,{ useState, useEffect } from "react";
import CounterButton from "./Count/CounterButton";
import SearchBar from "./SearchBar/SearchBar"



const items = ["Apple", "Pine Apple", "Orange", "Bannana", "Pomogranate"];


const App = () => {
  const [itemState, setItemState] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((item) => {
              const newItems = item.map((itm) =>{
                return itm.title
              })
               setItemState(newItems);
            })
           
  },[])
  
  const hasProduct = itemState.length >0
  return (
    <div>
      {/* <CounterButton increamentBy={1}/> */}
      {hasProduct ? <SearchBar prod={itemState} /> : "It is loading"}
    </div>
  );
};

export default App