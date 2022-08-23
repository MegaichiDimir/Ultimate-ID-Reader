import React, { useEffect } from "react";
import { createWorker } from "tesseract.js";

type Props = {
	ocrImage: string
	setRoomId: React.Dispatch<React.SetStateAction<string>>
}

const OcrProc:React.FC<Props> = (props) => {
	useEffect(() => {
		const worker = createWorker({
			logger: m => console.log(m)
		});
		(async () => {
			await worker.load();
			await worker.loadLanguage('eng');
			await worker.initialize('eng');
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