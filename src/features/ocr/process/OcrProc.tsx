import React, { useEffect, useRef } from "react";
import { createWorker } from "tesseract.js";

type Props = {
	ocrImage: string
	setRoomId: React.Dispatch<React.SetStateAction<string>>
}

const whitelist:string = '0123456789ABCDEFGHJKLMNPQRSTUVWXY'

const OcrProc:React.FC<Props> = (props) => {
	const firstRender = useRef(true);

	useEffect(() => {
		if(firstRender.current){
			firstRender.current = false;
			return;
		}
		(async () => {
			const worker = await createWorker({
				logger: m => console.log(m)
			});
			await worker.loadLanguage('eng');
			await worker.initialize('eng');
			await worker.setParameters({
				tessedit_char_whitelist: whitelist,
			});
			const { data: { text } } = await worker.recognize(props.ocrImage);
			props.setRoomId(text);
			await worker.terminate();
			navigator.clipboard.writeText(text);
		})();
	},[props.ocrImage]);

	return(
		<>
		</>
	)
}

export default OcrProc;