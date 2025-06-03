"use client";
import React, { useState } from "react";
import PlaceItemCard from "./PlaceItemCard";
import SideDrawer from "./SideDrawer";

const PlaceList = ({ placeList }: any) => {
  const [selectedPlace, setSelectedPlace] = useState<any>([]);

  // ✅ Handle edge cases where data is missing or invalid
  if (!Array.isArray(placeList) || placeList.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No results found. Try a different search.
      </div>
    );
  }

  return (
    <div className="px-[10px] mt-8 md:px-[120px]">
      <h1 className="text-2xl font-bold">Search Results</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {placeList.map((place: any, index: number) => (
          <div key={index} onClick={() => setSelectedPlace(place)}>
            <PlaceItemCard place={place} />
          </div>
        ))}
      </div>

      {selectedPlace?.properties?.name && (
        <div className="fixed top-0 right-0 z-20">
          <SideDrawer place={selectedPlace} onClose={() => setSelectedPlace(null)} />
        </div>
      )}
    </div>
  );
};

export default PlaceList;
