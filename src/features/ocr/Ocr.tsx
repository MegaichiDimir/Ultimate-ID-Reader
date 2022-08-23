import React, { useState } from "react";
import { css } from "@emotion/react";

import ImgProc from "./process/ImgProc";
import OcrProc from "./process/OcrProc";

type Props = {
	capImage: string
}

const Ocr:React.FC<Props> = (props) => {
	const [ocrImage, setOcrImage] = useState<string>('');
	const [roomId, setRoomId] = useState<string>('');
	return(
		<>
			<ImgProc
				capImage = {props.capImage}
				setOcrImage = {setOcrImage}
			/>
			<OcrProc
				ocrImage = {ocrImage}
				setRoomId = {setRoomId}
			/>
			<div>
				<img src={ocrImage} alt="" />
				<p>ID: {roomId}</p>
			</div>
		</>
	)
}

export default Ocr;