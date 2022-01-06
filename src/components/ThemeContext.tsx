import { createContext, useState } from "react";

type ThemeProviderProps = {
	children: React.ReactNode;
};

type ThemeContextProps = { darkTheme: boolean; toggleTheme: () => void };

export const ThemeContext = createContext<ThemeContextProps>({
	darkTheme: false,
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [darkTheme, setDarkTheme] = useState(false);

	const toggleTheme = () => {
		setDarkTheme((prevTheme) => !prevTheme);
	};

	return (
		<ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
