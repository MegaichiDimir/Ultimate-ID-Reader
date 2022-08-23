import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { css } from "@emotion/react";

import VideoList from "./VideoList";

type Props = {
	setCapImage: React.Dispatch<React.SetStateAction<string>>
}

const Capture: React.FC<Props> = (props) => {
	const [selectDeviceId, setSelectDeviceId] = useState<string>('');
	//const [capImage, setCapImage] = useState<string>('');
	const webcamRef = useRef<Webcam>(null!);
	const capture = useCallback(
		() => {
			const imageSrc = webcamRef.current.getScreenshot(); // imageSrcにBase64形式でpngを格納
			if(imageSrc){
				props.setCapImage(imageSrc);
			}
		},
		[webcamRef]
	);

	const style = css`
		
	`
	
	return (
		<>
			{selectDeviceId != '' &&
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
				</>
			}
			<button onClick={capture}>Capture</button>
			<VideoList
				setSelectDeviceId={setSelectDeviceId}
			/>
		</>
	);
};

export default Capture;