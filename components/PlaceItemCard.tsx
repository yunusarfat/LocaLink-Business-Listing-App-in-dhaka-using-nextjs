"use client";
import React from "react";
import { motion } from "framer-motion";

const PlaceItemCard = ({ place }: any) => {
  const {
    name,
    address_line1,
    address_line2,
    website,
    lon,
    lat,
  } = place.properties;

  const mapLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
  const targetLink = website || mapLink;

  return (
    <motion.a
    //   href={targetLink}
    //   target="_blank"
    //   rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="block bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="text-lg font-semibold text-blue-600">{name}</h2>
      <p className="text-gray-700 mt-1">{address_line1}</p>
      {address_line2 && <p className="text-gray-500">{address_line2}</p>}
      <p className="text-sm text-gray-400 mt-2">
        📍 {lat}, {lon}
      </p>
      {website && (
        <p className="text-sm text-blue-500 underline mt-2">Visit website ↗</p>
      )}
    </motion.a>
  );
};

export default PlaceItemCard;
