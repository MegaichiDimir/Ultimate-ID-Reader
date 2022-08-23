import React, { useState } from "react";
import { css } from "@emotion/react";

import ImgProc from "./process/ImgProc";
import OcrProc from "./process/OcrProc";

type Props = {
	capImage: string
}

const idTxt = css`
	font-size: 1.5em;
	font-weight: semibold;
`

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
				<p>ID: <span css={idTxt}>{roomId}</span></p>
			</div>
		</>
	)
}

export default Ocr;