import React, { useState } from "react";
import Webcam from "react-webcam";
import tw,{ css } from "twin.macro";

import VideoList from "./VideoList";
import TestCapture from "./TestCapture";

type Props = {
	testImage: string;
	setTestImage: React.Dispatch<React.SetStateAction<string>>;
}

const Capture: React.FC<Props> = ({ testImage, setTestImage }) => {
	
	return (
		<>
				<div css={tw`bg-slate-200 w-full aspect-video`}>
					{testImage != '' &&
						<>
							<img src={testImage} alt="testImage" />
						</>
					}
				</div>
				<TestCapture
					setTestImage={setTestImage}
				/>
		</>
	);
};

export default Capture;