import React, { useState } from "react";

interface User {
	name: string;
	age: number;
	hungry: boolean;
}

const Fetch = () => {
	const [user, setUser] = useState<User | null>(null);

	const handleFetch = () => {
		setUser({
			name: "John",
			age: 39,
			hungry: true,
		});
	};

	return (
		<div>
			The user is {user?.name}
			<button onClick={handleFetch}>Fetch User</button>
		</div>
	);
};

export default Fetch;
