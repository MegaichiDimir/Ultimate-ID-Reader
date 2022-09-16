import React, { useState } from "react";
import tw, { css } from "twin.macro";
import {MdContentCopy} from "react-icons/Md";

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
			{/* 画像、OCR処理部分のみ */}
			<ImgProc
				capImage = {props.capImage}
				setOcrImage = {setOcrImage}
			/>
			<OcrProc
				ocrImage = {ocrImage}
				setRoomId = {setRoomId}
			/>

			<div css={[css`width: 244px; height:60px;`, tw`bg-slate-200`]}>
				{ocrImage != '' &&
					<img css={tw`w-full`} src={ocrImage} alt="" />
				}
			</div>
			<div css={tw`w-full flex gap-4 justify-center text-2xl py-4 grow`}>
				<p css={tw`text-slate-800`}>ID: <input type="text" value={roomId} css={tw`border border-slate-300 rounded`}></input></p>
				<button 
					css={tw`grow-0 bg-green-500 hover:bg-green-400 text-white text-xl rounded px-1.5 py-1`} 
					onClick={() => navigator.clipboard.writeText(roomId)}
				><MdContentCopy /></button>
			</div>
		</>
	)
}

export default Ocr;