"use client";
import React from 'react'
import {useState} from "react;"
import { SearchManufacturer } from './';
const SearchBar = () => {
    const [manufacturer,setmanufacturer] = useState("");

    const handleSearch =() => {

    }

  return (
    <form className="searchbar" onSubmit={handleSearch}> 
        <div className = "searchbar__items">
            <SearchManufacturer />
                manufacturer = {manufacturer}
                setmanufacturer = {setmanufacturer}
        </div>
    </form>
  )
}

export default SearchBar