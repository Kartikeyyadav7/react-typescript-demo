import React, { useState } from "react";

const Form = () => {
	const [formData, setformData] = useState({
		title: "",
		body: "",
	});
	const { title, body } = formData;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setformData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
	};

	const handleClick = () => {
		console.log("we are clicked");
	};
	return (
		<div>
			<button onClick={handleClick}>Click me</button>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="title">Title</label>

				<input
					type="text"
					id="title"
					value={title}
					onChange={(e) => handleChange(e)}
				/>

				<label htmlFor="body">Body</label>
				<input type="text" id="body" value={body} onChange={handleChange} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Form;
