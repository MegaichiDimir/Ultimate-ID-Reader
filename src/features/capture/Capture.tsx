import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { css } from "@emotion/react";

import VideoList from "./VideoList";

const Capture: React.FC = () => {
	const [selectDeviceId, setSelectDeviceId] = useState<string>('');
	const [capImage, setCapImage] = useState<string>('');
	const webcamRef = useRef<Webcam>(null!);
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
				imageSmoothing={false}
				ref={webcamRef}
				screenshotFormat={'image/png'}
				forceScreenshotSourceSize
				videoConstraints={{
					width: 1920,
					height: 1080,
					facingMode: "user",
					deviceId: selectDeviceId
				}}
				//表示上のサイズ
				width={640}
				height={360}
				css={style}

			/>
			<button onClick={capture}>Capture photo</button>
			<VideoList
				setSelectDeviceId={setSelectDeviceId}
			/>
			<img src={capImage} alt="" />
		</>
	);
};

export default Capture;