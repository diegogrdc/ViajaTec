import React, { useRef } from "react";
import { useGoogleMap, useMap } from "../hooks/map_hook.js";
const API_KEY = "AIzaSyBcKg0tiyLBZ4Rvk4PlZR_V64ndFZOHbfs";

const initialConfig = {
  zoom: 12,
  center: { lat: 25.65180666937636, lng: -100.28951854530001 }
};

const Gmap = () => {
  const googleMap = useGoogleMap(API_KEY);
  const mapContainerRef = useRef(null);
  useMap({ googleMap, mapContainerRef, initialConfig });
  return (
    <div
      style={{
        height: "100vh",
        width: "100%"
      }}
      ref={mapContainerRef}
    />
  );
};

export default Gmap;
