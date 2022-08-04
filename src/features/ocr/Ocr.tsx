import React, { useState } from "react";
import { css } from "@emotion/react";

import Jimp from "./Jimp";
import Tesseract from "./Tesseract";

type Props = {
	capImage: string
}

const Ocr:React.FC<Props> = (props) => {
	const [ocrImage, setOcrImage] = useState<string>('');
	const [roomId, setRoomId] = useState<string>('');
	return(
		<>
			<Jimp
				capImage = {props.capImage}
				setOcrImage = {setOcrImage}
			/>
			<Tesseract
				ocrImage = {ocrImage}
				setRoomId = {setRoomId}
			/>
			<div>
				{roomId}
			</div>
		</>
	)
}

export default Ocr;