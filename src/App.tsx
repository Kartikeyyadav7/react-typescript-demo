import "./App.css";
import Form from "./components/Form";
import Display from "./components/Display";
import Heading from "./components/Heading";
import Subheading from "./components/Subheading";
import Style from "./components/Style";

function App() {
	const parents = {
		father: "Aron",
		mother: "Sydney",
	};
	const hobbies = ["playing guitar", "collecting coins"];
	return (
		<div className="App">
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
		</div>
	);
}

export default App;
