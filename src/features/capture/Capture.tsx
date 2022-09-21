import React, { useState } from "react";
import Webcam from "react-webcam";
import tw,{ css } from "twin.macro";

import VideoList from "./VideoList";

type Props = {
	webcamRef: React.MutableRefObject<Webcam>
}

const Capture: React.FC<Props> = (props) => {
	const [selectDeviceId, setSelectDeviceId] = useState<string>('');
	
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