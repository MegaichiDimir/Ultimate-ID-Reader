import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { css } from "@emotion/react";

import VideoList from "./VideoList";

const Capture = () => {
	const [deviceID, setDeviceID] = useState(null);
	const [capImage, setCapImage] = useState(null);
	const webcamRef = useRef<Webcam>(null);
	const capture = useCallback(
		() => {
			const imageSrc = webcamRef.current.getScreenshot(); // imageSrcにBase64形式でpngを格納
			if(imageSrc){
				setCapImage(imageSrc);
			}
		},
		[webcamRef]
	);

	const style = css`
		
	` 
	
	return (
		<>
			<Webcam
				audio={false}
				height={1080}
				width={1920}
				imageSmoothing={false}
				ref={webcamRef}
				screenshotFormat={'image/png'}
				videoConstraints={{
					width: 1920,
					height: 1080,
					facingMode: "user",
					deviceId: deviceID
				}}
				css={style}

			/>
			<button onClick={capture}>Capture photo</button>
			<VideoList
				setDeviceID={setDeviceID}
			/>
			<img src={capImage} alt="" />
		</>
	);
};

export default Capture;