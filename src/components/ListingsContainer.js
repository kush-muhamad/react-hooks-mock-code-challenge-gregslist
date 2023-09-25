import React, {useState, useEffect} from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer() {

  const [listing , setListing] = useState([])


 useEffect(()=>{
  fetch("http://localhost:6001/listings")
  .then(res => res.json())
  .then(setListing)

 },[])

  


  return (
    <main>
      <ul className="cards">
       {listing.map(listing => <ListingCard listing ={listing} key={listing.id}/>)} 
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
