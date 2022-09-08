import React from 'react'
import { Global } from '@emotion/react'
import tw, { theme, css, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = {
	body: {
		WebkitTapHighlightColor: theme`colors.blue.500`,
		...tw`antialiased`,
		...css`	
		font-family: "Helvetica Neue",
			Arial,
			"Hiragino Kaku Gothic ProN",
			"Hiragino Sans",
			"BIZ UDPGothic",
			Meiryo,
			sans-serif;
		`
	},
}

const GlobalStyles:React.FC = () => (
	<>
		<BaseStyles />
		<Global styles={customStyles} />
	</>
)

export default GlobalStyles