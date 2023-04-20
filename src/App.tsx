import React, { useState, useRef, useCallback } from "react";
import tw, { css } from 'twin.macro'
import "react-widgets/scss/styles.scss";
import Webcam from "react-webcam";

import Header from "./components/Header";
import Capture from "./features/capture/Capture";
import Ocr from "./features/ocr/Ocr";

const App: React.FC = () => {
	const [capImage, setCapImage] = useState<string>('');
	const [testImage, setTestImage] = useState<string>('');


	const capture = useCallback(
		() => {
			const imageSrc = testImage;
			if(imageSrc){
				setCapImage(imageSrc);
			}
		},
		[testImage]
);


	return(
		<>
			<Header />
			<div css={tw`px-2 mt-4 text-slate-800`}>
				<div css={tw`container mx-auto flex flex-col lg:flex-row flex-wrap gap-4 items-stretch`}>
					<div css={tw`w-full mx-auto flex-1 lg:basis-[49%]`}>
						<Capture 
							testImage={testImage}
							setTestImage={setTestImage}
						/> 
					</div>
					<div css={tw`w-full mx-auto flex flex-col items-stretch justify-between lg:basis-[49%]`}>
						<div css={tw`w-full mx-auto flex flex-col items-center lg:gap-2`}>
							<Ocr
								capImage={capImage}
							/>
						</div>
						<button css={tw`bg-blue-500 hover:bg-blue-400 text-white text-2xl rounded px-4 py-3 lg:py-3 mb-4 flex-none`} onClick={capture}>
							Read & Copy
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;