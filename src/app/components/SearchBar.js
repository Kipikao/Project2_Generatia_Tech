import React from "react";
import SearchBar from "./SearchBar.module.css";
import { useRouter, useSearchParams } from "next/navigation";

const searchBar = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get("terms") || ""
    const setSearchTerm = (terms)=>router.push(`/search?terms=${terms}`)



  
  return (
      <>
      <div className={`${SearchBar.form}`}>
        <input
          type="text"
          className={`search_input ${SearchBar.input}`}
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        <button className={SearchBar.button}>
          <img
            src="../../././././Img/search-svgrepo-com.svg"
            alt="search-svgrepo-com.svg"
          />
        </button>
      </div>
    </>
  );
};

export default searchBar;
