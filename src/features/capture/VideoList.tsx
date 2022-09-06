import React, {useState, useEffect } from "react";
import DropdownList from "react-widgets/DropdownList";

type Props = {
	setSelectDeviceId: React.Dispatch<React.SetStateAction<string>>
};

const VideoList: React.FC<Props> = (props) => {
	const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([]);

	// ビデオデバイスの配列をvideoDevicesに格納
	useEffect(() => {
		const constraints = { audio: false, video: { width: 1920, height: 1080 } };
		navigator.mediaDevices.getUserMedia(constraints)
			.then(() => {
				const getDevice = async () => {
					const addList = (await navigator.mediaDevices.enumerateDevices())
						.filter((device) => device.kind === 'videoinput');
					console.log(addList);
					setVideoDevices(addList);
				}
				getDevice();
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	
	return (
		<>
			<DropdownList 
				data={videoDevices}
				dataKey="deviceId"
				textField="label"
				placeholder="キャプチャデバイスを選択"
				onChange={(nextSelect) => props.setSelectDeviceId(nextSelect.deviceId)}
			/>
		</>
	);
};

export default VideoList;