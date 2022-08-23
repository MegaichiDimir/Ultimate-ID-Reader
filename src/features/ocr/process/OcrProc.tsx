import React, { useEffect } from "react";
import { createWorker } from "tesseract.js";

type Props = {
	ocrImage: string
	setRoomId: React.Dispatch<React.SetStateAction<string>>
}

const whitelist:string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const OcrProc:React.FC<Props> = (props) => {
	useEffect(() => {
		const worker = createWorker({
			logger: m => console.log(m)
		});
		(async () => {
			await worker.load();
			await worker.loadLanguage('eng');
			await worker.initialize('eng');
			await worker.setParameters({
				tessedit_char_whitelist: whitelist,
			});
			const { data: { text } } = await worker.recognize(props.ocrImage);
			props.setRoomId(text);
			await worker.terminate();
		})();
	},[props.ocrImage]);

	return(
		<>
		</>
	)
}

export default OcrProc;