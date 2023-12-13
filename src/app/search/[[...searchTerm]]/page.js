"use client";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import { useSearchParams } from "next/navigation";
// import Link from "next/link"


export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("terms") || "";

  const [dataGEO, setDataGEO] = useState(false);
  const api = "https://geocoding-api.open-meteo.com/v1/search";
  const dataApi = async () => {
    const req = await fetch(`${api}?name=${searchTerm}`);
    const res = await req.json();
    setDataGEO(res.results)    
    return res;
  };
  useEffect(() => {
    dataApi(searchTerm);
  }, [searchTerm]);
  
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 homeLink">
        <SearchBar />

       <div className="flex flex-row flex-wrap justify-center items-center">
          { dataGEO ? (dataGEO.map(e =>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-10 bg-white h-96" key={e.id}>
          <img
            className="w-full"
            src="/Img/city-home.png"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 items-center">{e.name}</div>
          </div>
          <div className="px-6 pt-4 pb-2 mt-auto mb-0 justify-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
          
           
          )) : ""}
          </div>
      </main>
      <Footer />
    </div>
  );
}


