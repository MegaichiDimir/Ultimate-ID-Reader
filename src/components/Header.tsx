import React from "react";
import tw,{ css } from "twin.macro";
import {FaTwitter, FaGithub} from 'react-icons/fa'

const Header: React.FC = () => {
	

	return(
		<>
			<div>
				<h1>Ultimate ID Reader</h1>
				<div>
					<a href=""><FaTwitter/></a>
					<a href=""><FaGithub/></a>
				</div>
			</div>
		</>
	)
}

export default Header;