import React, { useEffect, useRef } from "react";
import { Image } from "image-js";

type Props = {
	capImage: string
	setOcrImage: React.Dispatch<React.SetStateAction<string>>
}


const ImgProc:React.FC<Props> = (props) => {
	const firstRender = useRef(true);

	// image processing
	useEffect(() => {
		if(firstRender.current) {
			firstRender.current = false;
			return;
		}

		const getTxtImg = async () => {
			const image = await Image.load(props.capImage);
			const ocrImg = image
				.crop({y:100})
				.flipY()
				.crop({x:1798, y:950})
				.flipY()
				.grey()	//グレースケール化
				//.mask({threshold:0.6, invert:true}) //二値化
				.invert() //色反転
				.toBase64('image/png');
			props.setOcrImage("data:image/png;base64," + ocrImg);
		}
		getTxtImg();
	}, [props.capImage]);
	
	return(
		<>
		</>
	)
}

export default ImgProc;