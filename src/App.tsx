import "./App.css";
import Form from "./components/Form";
import Display from "./components/Display";
import Heading from "./components/Heading";
import Subheading from "./components/Subheading";
import Style from "./components/Style";
import Fetch from "./components/Fetch";
import Focus from "./components/Focus";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeChanger from "./components/ThemeChange";

function App() {
	const parents = {
		father: "Aron",
		mother: "Sydney",
	};
	const hobbies = ["playing guitar", "collecting coins"];
	return (
		<div className="App">
			<ThemeProvider>
				<Heading>
					<Subheading />
				</Heading>
				<Display
					name="John"
					age={20}
					alive={true}
					parents={parents}
					hobbies={hobbies}
					profession="Developer"
				/>
				<Form />
				<Style style={{ padding: `2rem`, color: `blue` }} />
				<Fetch />
				<Focus />
				<ThemeChanger />
			</ThemeProvider>
		</div>
	);
}

export default App;
