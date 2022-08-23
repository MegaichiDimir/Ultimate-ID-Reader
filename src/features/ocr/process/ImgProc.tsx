import React, { useEffect } from "react";
import { Image } from "image-js";

type Props = {
	capImage: string
	setOcrImage: React.Dispatch<React.SetStateAction<string>>
}


const ImgProc:React.FC<Props> = (props) => {
	// image processing
	useEffect(() => {
		const getTxtImg = async () => {
			const image = await Image.load(props.capImage);
			const ocrImg = image
				.crop({y:100})
				.flipY()
				.crop({x:1798, y:950})
				.flipY()
				.grey()	//グレースケール化
				.mask() //二値化
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