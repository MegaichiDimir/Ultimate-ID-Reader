import React, { useState, useEffect } from 'react';
import DropdownList from "react-widgets/DropdownList";
import tw, { css } from 'twin.macro';
import { Image } from "image-js";

import Screenshot1 from '../../assets/img/Screenshot1.png';

type Props ={
	setTestImage: React.Dispatch<React.SetStateAction<string>>
}

const TestCapture: React.FC<Props> = (props) => {
	const [selectImage, setSelectImage] = useState<string>('');

	useEffect(() => {
		const testImageToBase64 = async ()  => {
			const image = await Image.load(selectImage);
			if(image){
				const ocrImg = image.toBase64('image/png');
				props.setTestImage("data:image/png;base64," + ocrImg);
			}
		}
		testImageToBase64();
	}, [selectImage]);


	const images = [
		{
			key: '1',
			label: 'TestImage 1',
			imgData: Screenshot1,
		},
	]

	return (
		<>
		<DropdownList css={tw`my-4`}
			data={images}
			dataKey="key"
			textField="label"
			placeholder="キャプチャデバイスを選択"
			onChange={(nextSelect) => setSelectImage(nextSelect.imgData)}
		/>
	</>
	)
}

export default TestCapture;