"use client";
import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";
import Popup from "reactjs-popup";
import mapData from "../../mapData";
import Link from "next/link";

export default function MapComponent() {
  const [selectedMarker, setSelectedMarker] = useState<null | any[]>(null);

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <Map
        defaultCenter={[41.6903556363233, 21.533831072316295]}
        defaultZoom={9.15}
      >
        {mapData.features.map((feature: any) => {
          const coordinates = feature.geometry.coordinates;
          const latitude = coordinates[1];
          const longitude = coordinates[0];

          return (
            <Marker
              key={feature.id}
              anchor={[latitude, longitude]}
              payload={1}
              color="black"
              onClick={() => {
                let name = feature.properties.name;
                if (name == null) {
                  name = feature.properties["name:en"];
                  if (name == null) {
                    name = "Not listed";
                  }
                }
                let mail = feature.properties.website;
                if (mail == null) {
                  mail = "Not listed";
                }
                let number = feature.properties.phone;
                if (number == null) {
                  number = "Not listed";
                }
                setSelectedMarker([name, number, mail]);
                console.log(selectedMarker);
              }}
              width={45}
              height={50}
              offset={[0, 0]}
              className="opacity-100"
            />
          );
        })}

        {selectedMarker && (
          <div
            className="absolute bg-white p-4 shadow-md rounded"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <p className="mb-2 text-lg font-semibold text-black">
              Name: {selectedMarker[0]}
            </p>
            <p className="mb-2 text-black">Phone: {selectedMarker[1]}</p>
            <p className="mb-2 text-black">
              Website:{" "}
              {selectedMarker[2] != "Not listed" ? (
                <Link href={selectedMarker[2]} className="hover:text-red-500">
                  {selectedMarker[2]}
                </Link>
              ) : (
                "Not listed"
              )}
            </p>

            <button
              className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-800"
              onClick={() => setSelectedMarker(null)}
            >
              Close
            </button>
          </div>
        )}
      </Map>
    </div>
  );
}
