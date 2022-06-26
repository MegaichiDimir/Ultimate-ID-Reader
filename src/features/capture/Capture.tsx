import React, { useState } from "react";

import CamPreview from "./CamPreview";
import VideoList from "./VideoList";

const Capture = () => {
	const [deviceID, setDeviceID] = useState(null);
	
	return (
		<>
			<VideoList
				setDeviceID={setDeviceID}
			/>
			<div>device ID: {deviceID}</div>
		</>
	);
};

export default Capture;