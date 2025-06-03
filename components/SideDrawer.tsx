import React from "react";

const SideDrawer = ({ place, onClose }: any) => {
  const { name, address_line1, address_line2, website, lon, lat } =
    place?.properties || {};

  const mapPreview = `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lon}&zoom=15&size=400x200&markers=${lat},${lon},red-pushpin`;
  const googleMapLink = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
  console.log("lat:", lat, "lon:", lon);


  return (
   <div className=" mt-15 p-6 h-10px w-10px md:w-[400px] bg-white shadow-xl border-l border-gray-200 rounded-none md:rounded-l-2xl overflow-y-auto transition-all duration-300 ease-in-out">
  
  <div>
    <h2 className="text-2xl font-bold text-blue-700 mb-2">{name}</h2>
    <p className="text-gray-800 text-sm">{address_line1}</p>
    {address_line2 && (
      <p className="text-gray-500 text-sm mt-1">{address_line2}</p>
    )}

    {website && (
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-500 hover:text-blue-700 underline mt-4 inline-block"
      >
        🌐 Visit Website
      </a>
    )}

    <div className="mt-6">
      <a
        href={googleMapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-green-600 hover:text-green-800 text-sm font-medium underline"
      >
        🧭 Get Directions
      </a>
    </div>
    <button
    onClick={onClose}
    className="mb-6 text-red-500 font-medium hover:text-red-600 transition-colors mt-10"
  >
    ✖ Close
  </button>
  </div>
</div>

  );
};

export default SideDrawer;
