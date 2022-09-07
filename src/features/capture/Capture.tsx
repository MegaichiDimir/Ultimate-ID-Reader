import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import tw,{ css } from "twin.macro";
import App from "../../App";

import VideoList from "./VideoList";

type Props = {
	setCapImage: React.Dispatch<React.SetStateAction<string>>
	webcamRef: React.MutableRefObject<Webcam>
	capture: VoidFunction
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
			<div css={tw`mx-auto max-w-screen-sm`}>
				<div css={[css`width: 640px; height: 360px;`, tw`bg-gray-200`]}>
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
								width={640}
								height={360}
							/>
						</>
					}
				</div>
				<VideoList
					setSelectDeviceId={setSelectDeviceId}
				/>
			</div>
		</>
	);
};

export default Capture;