import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyle';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
	<>
		<GlobalStyles />
		<App />
	</>
);