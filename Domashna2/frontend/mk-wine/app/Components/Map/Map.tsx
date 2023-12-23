"use client";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import type { GeoJsonObject } from "geojson";
import wineries from "../../../../../../Domashna1/output.json";

function Map() {
	return (
		<MapContainer id="mapComponent" center={[41.69753382738964, 21.707921970981985]} zoom={9} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<GeoJSON data={wineries as GeoJsonObject} />
		</MapContainer>
	);
}

export default Map;
