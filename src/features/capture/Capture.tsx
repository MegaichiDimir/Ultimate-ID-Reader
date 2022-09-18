import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import tw,{ css } from "twin.macro";

import VideoList from "./VideoList";

type Props = {
	webcamRef: React.MutableRefObject<Webcam>
}

const Capture: React.FC<Props> = (props) => {
	const [selectDeviceId, setSelectDeviceId] = useState<string>('');
	// const [capImage, setCapImage] = useState<string>('');

	// const webcamRef = useRef<Webcam>(null!);
	// const capture = useCallback(
	// 	() => {
	// 		const imageSrc = webcamRef.current.getScreenshot(); // imageSrcにBase64形式でpngを格納
	// 		if(imageSrc){
	// 			props.setCapImage(imageSrc);
	// 		}
	// 	},
	// 	[webcamRef]
	// );
	
	return (
		<>
				<div css={tw`bg-slate-200 w-full aspect-video`}>
					{selectDeviceId != '' &&
						<>
							<Webcam
								audio={false}
								imageSmoothing={false}
								ref={props.webcamRef}
								screenshotFormat={'image/png'}
								forceScreenshotSourceSize
								videoConstraints={{
									width: 1920,
									height: 1080,
									facingMode: "user",
									deviceId: selectDeviceId
								}}
								//表示上のサイズ
								//width={640}
								//height={360}
							/>
						</>
					}
				</div>
				<VideoList
					setSelectDeviceId={setSelectDeviceId}
				/>
		</>
	);
};

export default Capture;