import Map from "../Components/Map";
import "./mapPageStyle.css";

export default function MapPage() {
	return (
		<div className="-z-20 flex justify-center">
			<div className="flex justify-center mt-8 z-10 bg-stone-800 bg-opacity-80 p-6 rounded-2xl">
				<Map />
			</div>
		</div>
	);
}
