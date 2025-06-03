"use client";
import Hero from "@/components/Hero";
import PlaceList from "@/components/PlaceList";
import { useState, useEffect } from "react";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    getPlaceList("cafe");
  }, []);

  const getPlaceList = async (value: string) => {
    const result = await fetch("/api/geoapify-place-api?categories=" + value);
    const data = await result.json();
    console.log("Fetched data:", data); // Add this line
    setPlaceList(data.data || []);
  };

  return (
    <div>
      <Hero userInput={(value: string) => getPlaceList(value)} />

      <PlaceList placeList={placeList} />
    </div>
  );
}
