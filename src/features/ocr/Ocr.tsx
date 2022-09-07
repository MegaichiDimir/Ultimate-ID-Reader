import React, { useState } from "react";
import tw, { css } from "twin.macro";

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
			<div css={tw`mx-auto`}>
				<ImgProc
					capImage = {props.capImage}
					setOcrImage = {setOcrImage}
				/>
				<OcrProc
					ocrImage = {ocrImage}
					setRoomId = {setRoomId}
				/>
				<div css={[css`width: 244px; height:60px;`, tw`bg-gray-200`]}>
					{ocrImage != '' &&
						<img css={tw`w-full`} src={ocrImage} alt="" />
					}
				</div>
				<p>ID: <span css={idTxt}>{roomId}</span></p>
			</div>
		</>
	)
}

export default Ocr;