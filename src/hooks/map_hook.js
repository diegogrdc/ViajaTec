import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import GoogleMapsApiLoader from "google-maps-api-loader";

const useGoogleMap = apiKey => {
  const [googleMap, setGoogleMap] = useState(null);
  useEffect(() => {
    GoogleMapsApiLoader({ apiKey }).then(google => {
      setGoogleMap(google);
    });
  }, []);
  return googleMap;
};

const blueroute = [
  {center: {lat: 25.65180666937636, lng: -100.28951854530001}, url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"},
  {center: {lat: 25.65180666937636, lng: -100.27951854530001}, url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"},
];
const redroute = [
  {center: {lat: 25.66180666937636, lng: -100.28951854530001}, url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"},
  {center: {lat: 25.66120666937636, lng: -100.27951854530001}, url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"},
];
const markerspos = [...blueroute, ...redroute];

const useMap = ({ googleMap, mapContainerRef, initialConfig }) => {
  const [map, setMap] = useState(null);
  useEffect(
    () => {
      if (!googleMap || !mapContainerRef.current) {
        return;
      }

      const map = new googleMap.maps.Map(
        mapContainerRef.current,
        initialConfig
      );

      // marker
      markerspos.map((markerInfo) => {
        const marker = new googleMap.maps.Marker({
          position: markerInfo.center,
          map: map,
          icon: {url: markerInfo.url},
          label: ""
        });
        const InfoWindow = new googleMap.maps.InfoWindow({
        content: `<div id="content">
                      <button id="onBtn" class="btn btn-sm">
                        Hola
                      </button>
                    </div>`
        });
        marker.addListener("click", () => {
          InfoWindow.open(map, marker);
        });
      })

      
      setMap(map);
    },
    [googleMap, mapContainerRef]
  );
  return map;
};

export { useGoogleMap, useMap };
