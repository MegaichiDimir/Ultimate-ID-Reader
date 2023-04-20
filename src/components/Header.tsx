import React from "react";
import tw,{ css } from "twin.macro";
import {FaTwitter, FaGithub} from 'react-icons/fa';

import Title from '../assets/img/title.svg';

const Header: React.FC = () => {
	

	return(
		<>
			<div css={tw`bg-white px-2 py-4 w-full lg:mb-4 drop-shadow-md text-slate-800`}>
				<div css={tw`container flex flex-row items-center justify-between mx-auto`}>
					<h1 css={tw`flex flex-row gap-2 mr-10`}><img src={Title} css={tw`text-slate-500`} width="190" alt="Ultimate ID Reader" /><span css={tw`text-red-500`}>Preview Mode</span></h1>
					<div css={tw`flex flex-row gap-5 text-2xl text-slate-400`}>
						<a href="https://twitter.com/Megaichi_Kenty" css={tw`hover:text-slate-600`}><FaTwitter/></a>
						<a href="https://github.com/MegaichiDimir/SSBU-Room-ID-Reader" css={tw`hover:text-slate-600`}><FaGithub/></a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header;